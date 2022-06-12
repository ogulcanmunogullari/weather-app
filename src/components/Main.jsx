import { useState } from "react";
import { useLocation } from "../context/Location_Context";

function Main() {
  const { daily } = useLocation();
  const [hover, setHover] = useState(false);
  const data = {
    1: "Pazartesi",
    2: "Salı",
    3: "Çarşamba",
    4: "Perşembe",
    5: "Cuma",
    6: "Cumartesi",
    0: "Pazar",
  };

  const dayName = new Date().getDay();
  return (
    <div>
      <div className="flex m-10">
        {daily &&
          daily.daily.map(
            (day, i) =>
              i === 0 && (
                <div
                  key={i}
                  className={`w-96 mx-auto rounded-3xl p-2 ${
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
                  }`}
                >
                  {dayName + i < 7 ? (
                    <h2 className="text-3xl text-center">
                      {data[dayName + i]}
                    </h2>
                  ) : i === 7 ? (
                    <h2 className="text-3xl text-center">{data[dayName]}</h2>
                  ) : i + dayName > 7 && i + dayName < 14 ? (
                    <h2 className="text-3xl text-center">
                      {data[i + dayName - 7]}
                    </h2>
                  ) : (
                    <h2 className="text-3xl text-center">{data[0]}</h2>
                  )}

                  <img
                    className="w-2/3 mx-auto -mt-10"
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt=""
                  />
                  <h2 className="text-3xl text-center -mt-10 mb-2">
                    {day.weather[0].description}
                  </h2>
                  <h4 className="text-center text-3xl mb-2">
                    Hissedilen Hava Sıcaklığı
                  </h4>
                  <div className="flex justify-around ">
                    <h4 className="text-2xl">
                      Gündüz: {Math.round(day.feels_like.day)}°C
                    </h4>
                    <h4 className="text-2xl">
                      Gece: {Math.round(day.feels_like.night)}°C
                    </h4>
                  </div>

                  <div className="flex justify-around text-2xl my-5">
                    <h4>%{day.clouds} Bulutlu</h4>
                    <h4>%{day.humidity} Nemli</h4>
                  </div>
                </div>
              )
          )}
      </div>
      <div className="flex flex-wrap justify-evenly md:w-full lg:w-[1024px] mx-auto">
        {daily &&
          daily.daily.map(
            (day, i) =>
              i > 0 && (
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
                    {dayName + i < 7 ? (
                      <h2 className="text-md">{data[dayName + i]}</h2>
                    ) : <h2 className="text-md">{i === 7}</h2> ? (
                      <h2 className="text-md">{data[dayName]}</h2>
                    ) : i + dayName > 7 && i + dayName < 14 ? (
                      <h2 className="text-md">{data[i + dayName - 7]}</h2>
                    ) : (
                      <h2 className="text-md">{data[0]}</h2>
                    )}
                  </div>
                  <img
                    className="mx-auto w-full -mb-5 -mt-5"
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt=""
                  />
                  <h2 className="text-xl text-center">
                    {day.weather[0].description}
                  </h2>
                  <div className={`${hover === true ? null : "hidden"}`}>
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
              )
          )}
      </div>
    </div>
  );
}

export default Main;
