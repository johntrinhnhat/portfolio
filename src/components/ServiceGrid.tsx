import { SimpleGrid } from "@chakra-ui/react";

import { MdOutlineGpsFixed } from "react-icons/md";
import { RiCodeView } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import ServiceCard from "./ServiceCard";
import DiaDivider from "./DiaDevider";

const Services = () => {
  return (
    <>
      <div id="services" className="service_grid">
        <DiaDivider Diamond1="#2B6CB0" />
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 2 }}
          gap="10"
          ml={{ base: "16", md: "12", lg: "12", "2xl": "44" }}
        >
          <ServiceCard
            icon={RiCodeView}
            heading="Web Development"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              nostrum! Repellendus repellat consequuntur totam."
          />
          <ServiceCard
            icon={MdOutlineGpsFixed}
            heading="Data Analytic"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam, nostrum! Repellendus repellat consequuntur totam."
          />
          <ServiceCard
            icon={SiAntdesign}
            heading="Data Science"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aperiam, nostrum! Repellendus repellat consequuntur totam."
          />
        </SimpleGrid>
      </div>
    </>
  );
};

export default Services;
