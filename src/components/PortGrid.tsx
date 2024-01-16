import { Box, SimpleGrid } from "@chakra-ui/react";

import DiaDevider from "./DiaDevider";
import { portfolio } from "../Data/Portfolio";
import PortfolioCard from "./PortCard";

const PortfolioGrid = () => {
  return (
    <>
      <Box id="portfolio">
        <DiaDevider Diamond1="#2B6CB0" Diamond2="#2B6CB0" />
      </Box>
      <Box w={{ base: "100%" }} p='1rem'>
        <select className="form-select">
          <option value="All categories">All categories</option>
          <option value="FRONT-END">FRONT-END</option>
          <option value="BACK-END">BACK-END</option>
          <option value="FULL-STACK">FULL-STACK</option>
        </select>
      </Box>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, '2xl': 3 }}
        gap={10}
        justifyContent={"space-between"}
        p='1rem'
      >
        {portfolio.map((portfolios) => (
          <PortfolioCard
            image={portfolios.image}
            heading={portfolios.heading}
            content={portfolios.content}
            key={portfolios.id}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default PortfolioGrid;
