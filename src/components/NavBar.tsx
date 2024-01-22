import { HStack, Heading, Button } from "@chakra-ui/react";
import ToggleColorMode from "./ToggleColorMode";
import { AiOutlineDownload } from "react-icons/ai";

const NavBar = () => {
  return (
      <HStack
        position={"fixed"}
        justify={"space-between"}
        width={"100%"}
        p="1.5rem"
        zIndex={"999"}
      >
        <Heading
          fontFamily={"Righteous"}
          fontSize={{ base: "40px", md: "50px", "2xl": "60px" }}
          pl={{ lg: "1rem", "2xl": "3rem" }}
        >
          J<span className="logo">T</span>
        </Heading>
        <HStack gap="1rem" pr="1rem">
          <Button bgColor={"blue.400"} rightIcon={<AiOutlineDownload />}>
            CV
          </Button>
          <ToggleColorMode />
        </HStack>
      </HStack>
  );
};

export default NavBar;
