import {
  Card,
  CardBody,
  Heading,
  Text,
  Image,
  Stack,
  Button,
  CardFooter,
  Divider,
} from "@chakra-ui/react";

interface Card {
  image: any;
  heading: string;
  content: string;
}

const PortfolioCard = ({ image, heading, content }: Card) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          objectFit="cover"
          src={image}
          alt="Portfolio"
          borderRadius="lg"
          boxSize="400px"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{heading}</Heading>
          <Text>{content}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="solid" colorScheme="blue">
          View
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
