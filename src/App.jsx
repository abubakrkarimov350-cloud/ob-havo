
import { useState } from "react";
import "./index.css";

const weatherData = {
  coord: { lon: 69.2163, lat: 41.2646 },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04n"
    }
  ],
  main: {
    temp: 14.27,
    feels_like: 13.42,
    temp_min: 14.27,
    temp_max: 14.27,
    pressure: 1025,
    humidity: 64
  },
  wind: {
    speed: 2.09,
    deg: 328
  },
  clouds: { all: 85 },
  sys: {
    country: "UZ",
    sunrise: 1795486889,
    sunset: 1795521499
  },
  timezone: 18000,
  name: "Tashkent"
};

function App() {
  const [data, setData] = useState(weatherData);
  const [city, setCity] = useState("");

  const formatTime = (timestamp) => {
    return new Date(
      (timestamp + data.timezone) * 1000
    ).toISOString().slice(11, 16);
  };

  const searchCity = (e) => {
    e.preventDefault();

    if (city.trim().toLowerCase() === "tashkent") {
      setData(weatherData);
    } else {
      alert("Hozircha faqat Toshkent ma'lumoti mavjud!");
    }
  };

  return (
    <div className="app">
      <div className="weather-card">

        <h1>Weather App</h1>
        <p className="subtitle">
          Bugungi ob-havo ma'lumotlari
        </p>

        <form onSubmit={searchCity}>
          <input
            type="text"
            placeholder="Shahar nomi..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <div className="weather-info">
          <h2>
            📍 {data.name}, {data.sys.country}
          </h2>

          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />

          <h1 className="temp">
            {Math.round(data.main.temp)}°C
          </h1>

          <h3>{data.weather[0].description}</h3>

          <div className="stats">

            <div className="stat">
              <span>🌡️</span>
              <p>His qilinishi</p>
              <h3>{data.main.feels_like}°C</h3>
            </div>

            <div className="stat">
              <span>💧</span>
              <p>Namlik</p>
              <h3>{data.main.humidity}%</h3>
            </div>

            <div className="stat">
              <span>🌬️</span>
              <p>Shamol</p>
              <h3>{data.wind.speed} m/s</h3>
            </div>

            <div className="stat">
              <span>☁️</span>
              <p>Bulutlilik</p>
              <h3>{data.clouds.all}%</h3>
            </div>

            <div className="stat">
              <span>🌅</span>
              <p>Quyosh chiqishi</p>
              <h3>{formatTime(data.sys.sunrise)}</h3>
            </div>

            <div className="stat">
              <span>🌇</span>
              <p>Quyosh botishi</p>
              <h3>{formatTime(data.sys.sunset)}</h3>
            </div>

          </div>
        </div>

        <p className="footer">
          Weather App © 2026
        </p>

      </div>
    </div>
  );
}

export default App;
