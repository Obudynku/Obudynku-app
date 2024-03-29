import { Injectable, StreamableFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BuildingEntity } from './building.entity';
import { HttpService } from '@nestjs/axios';
import { createReadStream, createWriteStream } from 'fs';

const imagesPath = process.env.IMAGES_PATH || './dist';

@Injectable()
export class BuildingService {
  constructor(
    @InjectRepository(BuildingEntity)
    private buildingRepository: Repository<BuildingEntity>,
    private httpService: HttpService,
  ) {}

  async getBuilding(id: string) {
    const building = await this.buildingRepository
      .createQueryBuilder('building')
      .where('building.id = :id', { id })
      .leftJoinAndSelect(
        'building.opinions',
        'opinion',
        'opinion.status = :status',
        { status: 'APPROVED' },
      )
      .getOne();
    return building;
  }

  async getBuildingImage(id: string) {
    const file = createReadStream(`${imagesPath}/${id}.jpg`);
    return new StreamableFile(file);
  }

  async searchBuildings(page: number, city?: string, search?: string) {
    const queryBuilder = this.buildingRepository.createQueryBuilder('building');
    queryBuilder
      .where(
        `${city ? 'building.city = :city' : 'TRUE'} AND ${
          search ? 'building.address LIKE :search' : 'TRUE'
        }`,
        {
          city,
          search: `%${search}%`,
        },
      )
      .leftJoinAndSelect('building.opinions', 'opinion')
      .andWhere('opinion.status = :status', { status: 'APPROVED' });
    const itemCount = await queryBuilder.getCount();
    const buildings = await queryBuilder
      .skip((page - 1) * 5)
      .take(5)
      .getMany();

    return { buildings, itemCount, pageCount: Math.ceil(itemCount / 5) };
  }

  async checkIfExist(city: string, address: string) {
    return this.buildingRepository.findOne({ city, address });
  }

  async addNewBuilding(
    city: string,
    address: string,
    lat: number,
    lon: number,
  ) {
    const newBuilding = await this.buildingRepository.create({
      city,
      address,
      lat,
      lon,
    });
    if (process.env.GOOGLE_STREETVIEW_KEY) {
      const streetviewMetadata = await this.httpService.axiosRef<{
        status?: 'OK';
      }>({
        url: `https://maps.googleapis.com/maps/api/streetview/metadata?source=outdoor&location=${newBuilding.lat},${newBuilding.lon}&pitch=0&key=${process.env.GOOGLE_STREETVIEW_KEY}`,
        method: 'GET',
        responseType: 'json',
      });
      if (streetviewMetadata.data.status === 'OK') {
        const streetviewImage = await this.httpService.axiosRef({
          url: `https://maps.googleapis.com/maps/api/streetview?size=1000x500&source=outdoor&location=${newBuilding.lat},${newBuilding.lon}&pitch=0&key=${process.env.GOOGLE_STREETVIEW_KEY}`,
          method: 'GET',
          responseType: 'stream',
        });
        const writeStream = streetviewImage.data.pipe(
          createWriteStream(`${imagesPath}/${newBuilding.id}.jpg`),
        );
        await new Promise((resolve) =>
          writeStream.on('finish', () => resolve('finish')),
        );
        newBuilding.hasImage = true;
      } else {
        newBuilding.hasImage = false;
      }
    }
    await this.buildingRepository.save(newBuilding);
    return newBuilding;
  }
}
