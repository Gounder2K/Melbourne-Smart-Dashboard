"use client";
import React, { useEffect, useState } from 'react';

interface WeatherData {
  location: string;
  temp: number;
  description: string;
  icon: string;
}

const WeatherCard: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/weather')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch weather');
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="bg-white rounded-xl shadow p-6 w-full max-w-xs text-center">Loading weather...</div>;
  }

  if (error) {
    return <div className="bg-red-100 text-red-700 rounded-xl shadow p-6 w-full max-w-xs text-center">{error}</div>;
  }

  if (!weather) return null;

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-xs text-center flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2">Weather in {weather.location}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.description}
        className="w-16 h-16 mx-auto"
      />
      <div className="text-4xl font-bold text-blue-600 mb-1">{Math.round(weather.temp)}°C</div>
      <div className="capitalize text-gray-600">{weather.description}</div>
    </div>
  );
};

export default WeatherCard; 