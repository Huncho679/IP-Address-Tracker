import { validDomain } from "./validDomain";

async function fetchIp(ip = "") {
  let url = "";
  if (validDomain(ip)) {
    url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_bJA87xH0gmV84pIzbrnG6w8cgKR1r${
      ip === "" ? "" : `&domain=${ip}`
    }`;
  } else {
    url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_bJA87xH0gmV84pIzbrnG6w8cgKR1r${
      ip === "" ? "" : `&ipAddress=${ip}`
    }`;
  }
  try {
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data);
    const { location } = data;
    const { lat, lng, timezone, region, city, postalCode } = location;
    const isp = data.isp;
    const displayIP = data.ip;
    return [lat, lng, timezone, region, city, postalCode, isp, displayIP];
  } catch {
    return -1;
  }
}

export { fetchIp };
