import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import DiaDivider from "./DiaDevider";

import herocopy from "../assets/herocopy.webp";

const Hero = () => {
  return (
    <>
      <Box
        id="hero"
        mt={{ base: "10rem", lg: "-5rem" }}
        // visibility={"hidden"}
      ></Box>
      <Flex position={"relative"} mb="6rem">
        <Image src={herocopy} boxSize={{ base: 370, md: 550, lg: 650 }} />
        <Box className="SNOW"></Box>
        <Box
          textAlign={"center"}
          position={"absolute"}
          left={{ base: "14.6rem", md: "22rem", lg: "25rem" }}
          top={{ base: "8rem", md: "12rem", lg: "15rem" }}
        >
          <Heading
            color="blue.600"
            fontSize={{ base:"24px", sm: "48px", lg: "60px" }}
            fontFamily={"Righteous"}
            mb={{base: "-.01rem"}}
          >
            CODING<span className="dotloading"><span>.</span><span>.</span><span>.</span></span>
            <Box className="SNOW"></Box>
          </Heading>

          <Text
            fontSize={{ base: ".6rem", md: ".8rem", lg: "1rem" }}
            position={"absolute"}
            fontFamily={"Righteous"}
          >
            "Building the future, stack by stack."
          </Text>
        </Box>
      </Flex>
      <DiaDivider Diamond1="#2B6CB0" />
    </>
  );
};

export default Hero;
