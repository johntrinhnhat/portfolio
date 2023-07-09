import { SimpleGrid } from "@chakra-ui/react";

import { MdOutlineGpsFixed } from "react-icons/md";
import { RiCodeView } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import ServiceCard from "./ServiceCard";
// import DeviderCustom from "./DeviderCustom";

const Services = () => {
  return (
    <>
      <div id="services" className="service_grid">
        {/* <DeviderCustom Diamond1="#2B6CB0" /> */}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={20}>
          <ServiceCard
            icon={RiCodeView}
            heading="Web Development"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              nostrum! Repellendus repellat consequuntur totam."
          />
          <ServiceCard
            icon={SiAntdesign}
            heading="UI/UX Design"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aperiam, nostrum! Repellendus repellat consequuntur totam."
          />
          <ServiceCard
            icon={MdOutlineGpsFixed}
            heading="Debug - Maintain"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aperiam, nostrum! Repellendus repellat consequuntur totam."
          />
        </SimpleGrid>
      </div>
    </>
  );
};

export default Services;
