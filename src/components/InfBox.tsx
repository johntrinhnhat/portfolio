import { VStack, Avatar, AvatarBadge, Box, Text } from "@chakra-ui/react";
import profile from "../../../assets/profile.png";
// import SocialMedia from "./SocialMedia";

const InfBox = () => {
  return (
    <VStack>
      <Avatar src={profile} size="lg">
        <AvatarBadge
          className="flashing"
          boxSize="22px"
          bg="blue.300"
          borderColor="blue.50"
        />
      </Avatar>
      <Box lineHeight={"15px"} textAlign={"center"} pt={"14px"}>
        <Text fontSize="24px">Khoi T.</Text>
        <Text fontSize="16px">Full Stack Web Developer</Text>
      </Box>
      {/* <SocialMedia /> */}
    </VStack>
  );
};

export default InfBox;
