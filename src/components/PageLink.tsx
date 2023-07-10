import { Box, Container, HStack } from "@chakra-ui/react";
import { BsPerson, BsSoundwave } from "react-icons/Bs";
import { AiOutlineThunderbolt } from "react-icons/ai";

import { SiMinutemailer } from "react-icons/si";
import { GiMetalHand } from "react-icons/gi";
// import { HashLink as Link } from "react-router-hash-link";

const PageLink = () => {
  return (
    <Container>
      <Box mx="3rem">
        <HStack mb="1rem" pl="5rem" gap={"2rem"}>
          <BsPerson size="30px" />
          {/* <Link smooth to="#hero"> */}
          About
          {/* </Link> */}
        </HStack>
        <HStack mb="1rem" pl="5rem" gap={"2rem"}>
          <AiOutlineThunderbolt size="30px" />
          {/* <Link smooth to="#services"> */}
          Services
          {/* </Link> */}
        </HStack>
        <HStack mb="1rem" pl="5rem" gap={"2rem"}>
          <GiMetalHand size="30px" />
          {/* <Link smooth to="#portfolio"> */}
          Portfolio
          {/* </Link> */}
        </HStack>
        <HStack mb="1rem" pl="5rem" gap={"2rem"}>
          <SiMinutemailer size="30px" />
          {/* <Link smooth to="#contact"> */}
          Contact
          {/* </Link> */}
        </HStack>
        <HStack mb="1rem" pl="5rem" gap={"2rem"}>
          <BsSoundwave size="30px" />
          {/* <Link to={"entertainment"}>Entertainment</Link> */}
        </HStack>
      </Box>
    </Container>
  );
};

export default PageLink;
