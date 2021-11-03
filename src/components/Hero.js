import { useState, useEffect } from "react";
import hero from "../assets/home/hero.jpg";

const Hero = () => {
  const [time, setTime] = useState("siang");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour > 6 && hour <= 11) {
      setTime("pagi");
    } else if (hour > 11 && hour <= 14) {
      setTime("siang");
    } else if (hour > 14 && hour <= 18) {
      setTime("sore");
    } else if (hour > 18 && hour <= 23) {
      setTime("pagi");
    } else {
      setTime("tengah malam");
    }
  }, []);

  return (
    <div
      className="relative top-0"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "52vh",
      }}
    >
      <div className="bg-white font-bold rounded-lg inline-block p-4 m-4 mt-20">
        <h1 className="text-gray-500">Selamat {time}</h1>
        <h2 className="text-4xl">Temukan menu terbaik disini!</h2>
      </div>
    </div>
  );
};

export default Hero;
