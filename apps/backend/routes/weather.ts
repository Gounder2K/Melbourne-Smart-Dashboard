import { Router, Request, Response, NextFunction } from 'express';
import axios from 'axios';
import 'dotenv/config';

const router = Router();

// Default: Melbourne CBD
const DEFAULT_LAT = -37.8136;
const DEFAULT_LON = 144.9631;

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const lat = req.query.lat || DEFAULT_LAT;
  const lon = req.query.lon || DEFAULT_LON;
  const apiKey = process.env.OPENWEATHER_API_KEY;
  console.log('API KEY:', apiKey);

  if (!apiKey) {
    return res.status(500).json({ error: 'OpenWeatherMap API key not set' });
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await axios.get(url);
    const data = response.data;
    // You can shape/transform the data here if needed
    res.json({
      location: data.name,
      temp: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      raw: data
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch weather data' });
  }
});

export default router; 