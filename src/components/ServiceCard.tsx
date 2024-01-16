import { Card, CardBody, VStack, Heading, Text, Icon } from "@chakra-ui/react";

interface Props {
  icon: any;
  heading: string;
  content: string;
}

const ServiceCard = ({ icon, heading, content }: Props) => {
  return (
    <Card maxWidth="300px" height="250px" boxShadow="2xl"  > 
      <CardBody>
        <VStack>
          <Icon boxSize="50px" as={icon} />
          <Heading fontSize="28px" fontFamily={"Righteous"}>
            {heading}
          </Heading>
          <Text textAlign={"justify"}>{content}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ServiceCard;
