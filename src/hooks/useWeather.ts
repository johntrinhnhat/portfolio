import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Cloud {
  all: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface WeatherData {
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Cloud;
  dt: number;
  id: number;
  name: string;
  cod: number;
}

const useWeather = () => {
  const controller = new AbortController();

  const fetchingWeather = () =>
    axios
      .get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=17a2af3a1cf36f4fe30ea1f9a07181d9&units=metric`,
        { signal: controller.signal }
      )
      .then((res) => res.data);

  return useQuery<WeatherData, Error>({
    queryKey: ["weather"],
    queryFn: fetchingWeather,
    staleTime: 1 * 60 * 1000,
  });
};

export default useWeather;

// "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=17a2af3a1cf36f4fe30ea1f9a07181d9"
