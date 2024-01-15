import { useApp } from "../Context/Context";
import { fetchIp } from "../utils/fetchIp";

export default function Search() {
  const {
    ip,
    handleIP,
    handlePosition,
    handleTimeZone,
    handleRegion,
    handleCity,
    handlePostalCode,
    handleIsp,
    handleDisplayIP,
    displayIP: display,
  } = useApp();
  return (
    <form
      className="flex w-full justify-center"
      onSubmit={async (e) => {
        e.preventDefault();

        if (ip.trim() === "") {
          //console.log("white space + empty");
          return;
        }
        if (display.trim() === ip.trim()) {
          //console.log("it works");
          return;
        }
        const data = await fetchIp(ip);
        if (data === -1) {
          return;
        }
        const [lat, lng, timezone, region, city, postalCode, isp, displayIP] =
          data;

        handlePosition(lat, lng);
        handleIsp(isp);
        handleTimeZone(timezone);
        handleRegion(region);
        handleCity(city);
        handlePostalCode(postalCode);
        handleDisplayIP(displayIP);
      }}
    >
      <input
        className="w-[40%] text-xl focus:none outline-none rounded-l-lg py-3 px-6"
        placeholder="Search for any IP address or Domain"
        value={ip}
        onChange={(e) => {
          handleIP(e.target.value);
        }}
      ></input>
      <button className="bg-black text-white px-4 rounded-r-lg hover:bg-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 font-bold"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </form>
  );
}
