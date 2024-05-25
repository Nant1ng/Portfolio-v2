import { useState, useEffect } from "react";
import {
  SunIcon,
  CloudIcon,
  CloudRainIcon,
  CloudSnowIcon,
  CloudLightningIcon,
  CloudFogIcon,
} from "@heroicons/react/24/solid";

const getWeatherIcon = (weatherId) => {
  if (weatherId >= 200 && weatherId < 300) {
    return <CloudLightningIcon className="weather-icon" />;
  } else if (weatherId >= 300 && weatherId < 500) {
    return <CloudRainIcon className="weather-icon" />;
  } else if (weatherId >= 500 && weatherId < 600) {
    return <CloudRainIcon className="weather-icon" />;
  } else if (weatherId >= 600 && weatherId < 700) {
    return <CloudSnowIcon className="weather-icon" />;
  } else if (weatherId >= 700 && weatherId < 800) {
    return <CloudFogIcon className="weather-icon" />;
  } else if (weatherId === 800) {
    return <SunIcon className="weather-icon" />;
  } else if (weatherId > 800 && weatherId < 900) {
    return <CloudIcon className="weather-icon" />;
  } else {
    return <SunIcon className="weather-icon" />; // Default icon
  }
};

const Location = ({ data }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const swedishTime = time.toLocaleString("sv-SE", {
    timeZone: "Europe/Stockholm",
    hour: "2-digit",
    minute: "2-digit",
  });
  const temperature = Math.floor(data.main.temp);
  const weatherId = data.weather[0].id;
  const weatherIcon = getWeatherIcon(weatherId);

  return (
    <div className="location">
      <h4>
        <span className="uppercase">Current Location:</span> Stockholm, Sweden:{" "}
        <span className="underline">
          {swedishTime} {temperature} °C
        </span>
        {weatherIcon}
      </h4>
    </div>
  );
};

export default Location;
