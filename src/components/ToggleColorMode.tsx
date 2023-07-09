import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      >
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Switch>
    </HStack>
  );
};

export default ToggleColorMode;
