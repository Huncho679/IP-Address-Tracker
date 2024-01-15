import { useApp } from "../Context/Context";
import { memo } from "react";

function DataDisplay() {
  const { displayIP, city, region, postalCode, timeZone, isp } = useApp();
  //console.log("being rerendered");
  return (
    <div className="absolute top-[250px] left-1/2 transform -translate-x-1/2 w-[80%] sm:w-[60%] lg:w-[70%] lg:h-[18%] 2xl:h-[14%] bg-white z-10 rounded-2xl shadow-lg flex justify-center items-center h-[40%]">
      <div className="lg:h-[55%] w-[95%] lg:flex-row lg:gap-8 h-[85%] flex flex-col items-center">
        <div className="lg:border-r lg:border-gray-300 lg:pr-12">
          <h2 className="text-stone-500 tracking-widest font-bold uppercase text-sm text-center lg:text-start">
            IP Address
          </h2>
          <p className="mt-3 font-semibold xl:text-2xl text-xl">{displayIP}</p>
        </div>

        <div className="lg:border-r lg:border-gray-300 lg:pr-12 mt-4 lg:mt-0">
          <h2 className="text-stone-500 tracking-widest font-bold uppercase text-sm text-center lg:text-start">
            Location
          </h2>
          {(city || region || postalCode) && (
            <p className="mt-3 font-semibold xl:text-2xl text-xl">
              {city}, {region} {postalCode}
            </p>
          )}
        </div>

        <div className="lg:border-r lg:border-gray-300 lg:pr-12 mt-4 lg:mt-0">
          <h2 className="text-stone-500 tracking-widest font-bold uppercase text-sm text-center lg:text-start">
            Timezone
          </h2>
          {timeZone && (
            <p className="mt-3 font-semibold xl:text-2xl text-xl">
              UTC {timeZone}
            </p>
          )}
        </div>

        <div className="mt-4 lg:mt-0">
          <h2 className="text-stone-500 tracking-widest font-bold uppercase text-sm text-center lg:text-start">
            ISP
          </h2>
          <p className="mt-3 font-semibold xl:text-2xl text-xl">{isp}</p>
        </div>
      </div>
    </div>
  );
}

export default memo(DataDisplay);
