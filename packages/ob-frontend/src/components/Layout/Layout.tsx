import React from "react";
import Container from "@mui/material/Container";
import { Menu } from "@/components/Navigation/Menu";
import { Divider, Grid, Link, Stack } from "@mui/material";

export const Layout: React.FC<{
  children?: React.ReactNode;
  centered?: boolean;
}> = ({ children, centered }) => {
  return (
    <Container fixed>
      <Menu />
      <Container
        sx={
          centered
            ? {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignContent: "center",
                height: "calc(100vh - 170px)",
                padding: "0px !important"
              }
            : {
                padding: "0px 0px 20px 0px !important",
                minHeight: "calc(100vh - 170px)"
              }
        }
      >
        {children}
      </Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ padding: "20px 0", fontSize: 12 }}
      >
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={1}
          justifyContent="flex-end"
          alignItems="center"
          textAlign="center"
        >
          <div>{new Date().getFullYear()} © Obudynku.pl</div>
          <Stack spacing={1} direction="row" alignItems="center">
            <Link href="/privacy">Polityka prywatności</Link>
            <Link href="/rules">Regulamin</Link>
          </Stack>
        </Stack>
      </Grid>
    </Container>
  );
};
