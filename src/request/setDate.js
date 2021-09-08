export const setData = (weatherData, index = 0) => {
  const temperatureKelvin = {
    temp: +(weatherData.list[index].main.temp).toFixed(1),
    maxTemp: weatherData.list[index].main.temp_max,
    minTemp: weatherData.list[index].main.temp_min,
    feelsLike: +(weatherData.list[index].main.feels_like).toFixed(1),
  }
  const weatherStatus = {
    name: weatherData.city.name,
    ...weatherData.list[index].weather[0],
  }
  weatherStatus.icon = `http://openweathermap.org/img/wn/${weatherStatus.icon}@2x.png`

  const weatherPrecipitation = {
    clouds: weatherData.list[index].clouds.all,
    humidity: weatherData.list[index].main.humidity,
    pressure: weatherData.list[index].main.pressure,
    visibility: weatherData.list[index].visibility,
    wind: weatherData.list[index].wind.speed,
    timeZone: weatherData.city.timezone,
  }

  return [temperatureKelvin, weatherStatus, weatherPrecipitation]
}