import { Center, HStack } from "@chakra-ui/react";
import Diamond from "./Diamond";

interface Props {
  Diamond1?: string;
  Diamond2?: string;
  Diamond3?: string;
  Diamond4?: string;
  Diamond5?: string;
}

const DiaDevider = ({ Diamond1, Diamond2, Diamond3, Diamond4 }: Props) => {
  return (
    <Center>
      <HStack my="6rem">
        <Diamond color={Diamond1} />
        <Diamond color={Diamond2} />
        <Diamond color={Diamond3} />
        <Diamond color={Diamond4} />
      </HStack>
    </Center>
  );
};

export default DiaDevider;

// #2B6CB0
