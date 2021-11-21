const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=ae32e5f66d6dab9abd12cafd78c07b55&units=imperial`;

export const getWeather = async (city, state) => {
  const response = await fetch(`${API_URL}&q=${city},${state}`);
  const json = await response.json();

  return {
    weatherMetadata: json.weather[0],
    temperature: json.main.temp
  };
};

const openWeatherMapApi = {
  getWeather
};

export default openWeatherMapApi;
