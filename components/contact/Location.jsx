import { useState, useEffect } from "react";

const Location = ({ data }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const swedishTime = time.toLocaleString('sv-SE', {timeZone: 'Europe/Stockholm', hour: '2-digit', minute: '2-digit'});
  const temperature = Math.floor(data.main.temp);

  return (
    <div className="location">
      <h4>
        <span className="uppercase">Current Location:</span> Stockholm, Sweden: <span className="underline">{swedishTime} {temperature} °C</span>
      </h4>
    </div>
  );
};

export default Location;
