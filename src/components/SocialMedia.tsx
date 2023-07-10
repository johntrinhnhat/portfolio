import { Box, HStack, Link } from "@chakra-ui/react";
import { AiFillFacebook } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
const SocialMedia = () => {
  return (
    <Box width={"300px"}>
      <HStack justify="space-around" mt="1rem">
        <Link
          isExternal={true}
          href="https://www.upwork.com/freelancers/~014ec491752cb04a38"
        >
          <SiUpwork size="25px" />
        </Link>
        <Link
          isExternal={true}
          href="https://www.linkedin.com/in/khoi-t-3658a0190/"
        >
          <AiFillLinkedin size="25px" />
        </Link>
        <Link isExternal={true} href="https://www.facebook.com/johntrinhnhat/">
          <AiFillFacebook size="25px" />
        </Link>
        <Link isExternal={true} href="https://www.instagram.com/nhatkhoiii333/">
          <AiFillInstagram size="25px" />
        </Link>
        <Link isExternal={true} href="">
          <AiOutlineTwitter size="25px" />
        </Link>
      </HStack>
    </Box>
  );
};

export default SocialMedia;
