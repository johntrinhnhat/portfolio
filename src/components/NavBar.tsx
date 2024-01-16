import { HStack, Heading, Button } from "@chakra-ui/react";
import ToggleColorMode from "./ToggleColorMode";
import { AiOutlineDownload } from "react-icons/ai";

const NavBar = () => {
  return (
    <HStack
      position={"fixed"}
      justify={"space-between"}
      width={"100%"}
      p="2rem"
      zIndex={"999"}
    >
      <Heading
        fontFamily={"Righteous"}
        fontSize={{ base: "40px", md: "50px" }}
        pl="1rem"
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
