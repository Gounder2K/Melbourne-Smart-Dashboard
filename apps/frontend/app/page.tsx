import Image from "next/image";
import styles from "./page.module.css";
import WeatherCard from '../components/WeatherCard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <WeatherCard />
    </main>
  );
}
