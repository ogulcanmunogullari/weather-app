import React from "react";
import { useState } from "react";

function Table({ dayName, day, i, data }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="h-[350px]">
      <div
        onClick={() => setHover(!hover)}
        key={i}
        className={`${
          day.clouds > 75
            ? "bg-gray-600 text-neutral-200"
            : day.clouds > 50
            ? "bg-gray-400"
            : day.clouds > 35
            ? "bg-gray-300"
            : day.clouds > 25
            ? "bg-cyan-100 text-blue-900"
            : day.clouds > 15
            ? "bg-cyan-200 text-blue-900"
            : day.clouds > 10
            ? "bg-cyan-300 text-blue-900"
            : "bg-cyan-400 text-blue-900"
        } w-36 mb-10 rounded-3xl p-2`}
      >
        <div className="flex justify-evenly">
          <h2 className="text-3xl text-center">{data[dayName + i]}</h2>
        </div>
        <img
          className="mx-auto w-full -mb-5 -mt-5"
          src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          alt=""
        />
        <div className="h-20">
          <h2 className="text-xl text-center">{day.weather[0].description}</h2>
        </div>
        <div className={`${hover === false ? "hidden" : "text-md"}`}>
          <h4 className="text-center text-md">Hissedilen Sıcaklık</h4>
          <div className="flex justify-around ">
            <h4 className="text-lg">
              Gündüz: {Math.round(day.feels_like.day)}°C
            </h4>
            <h4 className="text-lg">
              Gece: {Math.round(day.feels_like.night)}°C
            </h4>
          </div>

          <h4>%{day.clouds} Bulutlu</h4>
          <h4>%{day.humidity} Nemli</h4>
        </div>
      </div>
    </div>
  );
}

export default Table;
