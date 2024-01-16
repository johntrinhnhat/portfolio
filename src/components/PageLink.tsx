import { Box, Container, HStack } from "@chakra-ui/react";

import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

// import { GiSoundWaves } from "react-icons/gi";
import { SiMinutemailer } from "react-icons/si";
import { GiMetalHand } from "react-icons/gi";
import { HashLink as Link } from "react-router-hash-link";

const PageLink = () => {
  const linkHoverStyle = {
    color: "#74b7fd",
    textDecoration: "underline"
  };

  return (
    <Container>
      <Box mx={{lg: "4rem", "2xl": "2rem"}}>
        <HStack mb="1rem" pl={{lg: "5rem", '2xl': "9rem"}} gap={"2rem"} _hover={linkHoverStyle}>
          <IoPersonOutline size="25px" />
          <Link smooth to="#hero" >
            About
          </Link>
        </HStack>
        <HStack mb="1rem" pl={{lg: "5rem", '2xl': "9rem"}} gap={"2rem"} _hover={linkHoverStyle}>
          <AiOutlineThunderbolt size="25px" />
          <Link smooth to="#services">
            Services
          </Link>
        </HStack>
        <HStack mb="1rem" pl={{lg: "5rem", '2xl': "9rem"}} gap={"2rem"} _hover={linkHoverStyle}>
          <GiMetalHand size="25px" />
          <Link smooth to="#portfolio">
            Portfolio
          </Link>
        </HStack>
        <HStack mb="1rem" pl={{lg: "5rem", '2xl': "9rem"}} gap={"2rem"} _hover={linkHoverStyle}>
          <SiMinutemailer size="25px" />
          <Link smooth to="#contact">
            Contact
          </Link>
        </HStack>
        {/* <HStack mb="1rem" pl="5rem" gap={"2rem"}>
          <GiSoundWaves size="25px" />
          <Link to={"entertainment"}>Entertainment</Link>
        </HStack> */}
      </Box>
    </Container>
  );
};

export default PageLink;
