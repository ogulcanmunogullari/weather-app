import { useLocation } from "../context/Location_Context";
import Table from "./Table";
const data = {
  0: "Pazar",
  1: "Pazartesi",
  2: "Salı",
  3: "Çarşamba",
  4: "Perşembe",
  5: "Cuma",
  6: "Cumartesi",
  7: "Pazar",
  8: "Pazartesi",
  9: "Salı",
  10: "Çarşamba",
  11: "Perşembe",
  12: "Cuma",
  13: "Cumartesi",
  14: "Pazar",
};

function Main() {
  const { daily } = useLocation();

  let dayName = new Date().getDay();
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
                  <h2 className="text-3xl text-center">{data[dayName + i]}</h2>

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
              i > 0 && <Table day={day} dayName={dayName} i={i} data={data} />
          )}
      </div>
    </div>
  );
}

export default Main;
