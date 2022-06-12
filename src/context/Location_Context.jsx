import { useGeolocated } from "react-geolocated";
import axios from "axios";
import { useEffect, useContext, useState, createContext } from "react";
const api = process.env.REACT_APP_API;
const LocationContext = createContext();
export const LocationProvider = ({ children }) => {
  useContext(LocationContext);

  const [search, setSearch] = useState("");
  const [daily, setDaily] = useState("");
  const [infoCity, setInfoCity] = useState("");
  const [location, setLocation] = useState("");
  const { coords, isGeolocationAvailable } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });
  useEffect(() => {
    if (search.length > 0) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api}&units=metric`
        )
        .then((res) => {
          setLocation({
            latitude: res.data.coord.lat,
            longitude: res.data.coord.lon,
          });
          setInfoCity(res.data.name);
        });
      console.log("arama yaptım");
    } else {
      if (coords) {
        setLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lang=tr&lon=${coords.longitude}&appid=${api}&units=metric`
          )
          .then((res) => {
            setInfoCity(res.data.name);
          });
      } else if (infoCity.length !== "") {
        setInfoCity("Konumunuz Kapalı, Arama Butonunu Kullanınız");
      }
    }
  }, [search, coords, isGeolocationAvailable, infoCity]);
  useEffect(() => {
    if (location.latitude && location.longitude) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lang=tr&lon=${location.longitude}&exclude=minutely,hourly&appid=${api}&units=metric`
        )
        .then((response) => {
          setDaily(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [location]);
  const values = {
    setSearch,
    daily,
    infoCity,
  };
  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
