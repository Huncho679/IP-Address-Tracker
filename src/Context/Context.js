import { createContext, useContext, useEffect, useState } from "react";
import { fetchIp } from "../utils/fetchIp";

const appContext = createContext();

function Context({ children }) {
  const [position, setPosition] = useState([]);
  const [ip, setIP] = useState("");
  const [isp, setIsp] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [displayIP, setDisplayIP] = useState("");

  function handleIP(str) {
    setIP(str);
  }

  function handleDisplayIP(str) {
    setDisplayIP(str);
  }

  function handlePosition(lat, lng) {
    setPosition([lat, lng]);
  }

  function handleIsp(str) {
    setIsp(str);
  }

  function handleTimeZone(str) {
    setTimeZone(str);
  }

  function handleRegion(str) {
    setRegion(str);
  }

  function handleCity(str) {
    setCity(str);
  }

  function handlePostalCode(str) {
    setPostalCode(str);
  }

  useEffect(function () {
    async function dataOnLoad() {
      const [lat, lng, timezone, region, city, postalCode, isp, displayIP] =
        await fetchIp();
      handlePosition(lat, lng);
      handleIsp(isp);
      handleTimeZone(timezone);
      handleRegion(region);
      handleCity(city);
      handlePostalCode(postalCode);
      handleDisplayIP(displayIP);
    }
    dataOnLoad();
  }, []);

  return (
    <appContext.Provider
      value={{
        ip,
        handleIP,
        position,
        handlePosition,
        isp,
        handleIsp,
        timeZone,
        handleTimeZone,
        region,
        handleRegion,
        city,
        handleCity,
        postalCode,
        handlePostalCode,
        displayIP,
        handleDisplayIP,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

function useApp() {
  const context = useContext(appContext);
  if (!context)
    throw new Error(
      "Can't use this hook outside of Components that aren't contained in the App Context"
    );
  return context;
}

export { useApp, Context };
