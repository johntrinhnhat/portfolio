import {
  Grid,
  Show,
  GridItem,
  Container,
  Divider,
  Box,
} from "@chakra-ui/react";
import Hero from "../components/Hero";
import Services from "../components/ServiceGrid";
import PortfolioGrid from "../components/PortGrid";
import ContactForm from "../components/ContactFrom";
import InfBox from "../components/InfBox";
import WeatherBox from "../components/WeatherBox";
import PageLink from "../components/PageLink";

const Home = () => {
  return (
    <>
      <Grid
        pt={{ base: "0", lg: "8rem" }}
        templateAreas={{
          base: `'main'`,
          lg: `'aside main'`,
        }}
        minHeight={{ base: "auto", lg: "100vh" }}
      >
        <Show above="lg">
          <GridItem position="fixed" area="aside" fontFamily={"Righteous"}>
            <Container>
              <InfBox />
              <Divider my="2.5rem" />
              <PageLink />
              <Divider my="2.5rem" />
              <WeatherBox />
            </Container>
          </GridItem>
        </Show>
        <GridItem pl={{ base: "0", lg: "30rem" }} area="main">
          <Box className="main-scroll">
            <Hero />
            <Services />
            <PortfolioGrid />
            <ContactForm />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
