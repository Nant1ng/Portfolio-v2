export const fetchWeather = async () => {
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const city = "Stockholm";

  const res = await fetch(
    `${apiUrl}?q=${city}&appid=${apiKey}&units=metric&lang=sv`
  );

  if (!res.ok) {
    throw new Error("Network response was not ok.");
  }

  const data = await res.json();

  return data;
};
