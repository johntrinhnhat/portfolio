import test1 from "../assets/test1.webp";
import test2 from "../assets/test2.webp";
import test3 from "../assets/test3.webp";
import test4 from "../assets/test4.webp";
import test5 from "../assets/test5.webp";

import test7 from "../assets/test7.webp";
import test8 from "../assets/test8.webp";
import test9 from "../assets/test9.webp";
import test10 from "../assets/test10.webp";

import {
  Box,
  Center,
  Container,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";

import { GiWhirlwind } from "react-icons/gi";
import { MdOutlineWaterDrop } from "react-icons/md";

import useWeather from "../hooks/useWeather";
import "../index.css";
import { useState, useEffect } from "react";

const WeatherBox = () => {
  ///// Image Random
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    test1,
    test2,
    test3,
    test4,
    test5,
    test7,
    test8,
    test9,
    test10,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random image index
      const randomIndex = Math.floor(Math.random() * images.length);
      setImageIndex(randomIndex);
    }, 10_000); // Change image every 10s

    return () => {
      clearInterval(interval); // Cleanup the interval when the component is unmounted
    };
  }, [images.length]);

  ///// Data from fetching
  const { data, error, isLoading } = useWeather();

  const iconValue = data?.weather[0].icon;
  const temp = data?.main.temp.toFixed(0);
  const minTemp = data?.main.temp_min.toFixed(0);
  const maxTemp = data?.main.temp_max.toFixed(0);
  const feelsLike = data?.main.feels_like.toFixed(0);
  const wind = data?.wind.speed.toFixed(1);
  const humidity = data?.main.humidity;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Skeleton isLoaded={!isLoading} height={"15rem"} borderRadius={"14px"}>
        <Container
          className="weather_box"
          fontFamily={"Righteous"}
          bgImage={images[imageIndex]}
          boxShadow="dark-lg"
          h={{lg: "15.2rem", "2xl": "22rem"}}
          mt={{lg: "-.5rem", "2xl": "2rem"}}
        >
          <div className="overlay"></div>
          <SimpleGrid columns={2} spacing={10}>
            <Box mt={{lg:"6", '2xl':"4"}} p={{lg:"4", "2xl": "14"}}>
              <Heading size={{lg: "lg", "2xl": "xl"}}>{data?.name}</Heading>
              <Image
                src={`http://openweathermap.org/img/w/${iconValue}.png`}
                h={{lg:"70px", "2xl": "100px"}}
              />
              <Heading>{temp}&#8451;</Heading>
              <Text fontSize={{lg: "13px", "2xl": "16px"}}>
                {maxTemp}&#8451;/{minTemp}&#8451;{" "}
                <span>Feels like {feelsLike}&#8451;</span>
              </Text>
            </Box>
            <Box p={{lg:"5"}} mt={{lg:"3", "2xl":"12"}}>
              <VStack spacing="2">
                <Container pt="2" w="150px" h={{lg:"80px", "2xl": "100px"}} textAlign={"center"}>
                  <Center>
                    <Icon as={GiWhirlwind} boxSize={{lg: '24px', "2xl": "36px"}}/>
                  </Center>
                  <Text fontSize={{"2xl": "24px"}}>Wind</Text>
                  <Text mt="-2" fontSize={{lg: "14px", "2xl": "16px"}}>
                    {wind}m/s
                  </Text>
                </Container>
                <Container pt="6" w="150px" h="80px" textAlign={"center"}>
                  <Center>
                    <Icon as={MdOutlineWaterDrop} boxSize={{lg:'24px', "2xl": "36px"}} />
                  </Center>
                  <Text fontSize={{"2xl": "24px"}}>Humidity</Text>
                  <Text mt="-2" fontSize={{lg: "14px", "2xl": "16px"}}>
                    {humidity}%
                  </Text>
                </Container>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Skeleton>
    </>
  );
};

export default WeatherBox;
