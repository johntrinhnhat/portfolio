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
      <Skeleton isLoaded={!isLoading} height={"15rem"}>
        <Container
          className="weather_box"
          fontFamily={"Righteous"}
          bgImage={images[imageIndex]}
          boxShadow="dark-lg"
          h="15rem"
          my="2rem"
        >
          <div className="overlay"></div>
          <SimpleGrid columns={2} spacing={10}>
            <Box p="8">
              <Heading size="lg">{data?.name}</Heading>
              <Image
                src={`http://openweathermap.org/img/w/${iconValue}.png`}
                h="70px"
              />
              <Heading>{temp}&#8451;</Heading>
              <Text fontSize="13px">
                {maxTemp}&deg;/{minTemp}&deg;{" "}
                <span>Feels like: {feelsLike}</span>
              </Text>
            </Box>
            <Box p="5" mt="3">
              <VStack spacing="2">
                <Container pt="2" w="150px" h="80px" textAlign={"center"}>
                  <Center>
                    <GiWhirlwind />
                  </Center>
                  <Text>Wind</Text>
                  <Text mt="-2" fontSize="14px">
                    {wind}m/s
                  </Text>
                </Container>
                <Container pt="2" w="150px" h="80px" textAlign={"center"}>
                  <Center>
                    <MdOutlineWaterDrop />
                  </Center>
                  <Text>Humidity</Text>
                  <Text mt="-2" fontSize="14px">
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
