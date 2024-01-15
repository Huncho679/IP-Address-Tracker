  import DataDisplay from "./Components/DataDisplay";
  import Map from "./Components/Map";
  import Search from "./Components/Search";

  export default function App() {
    return (
      <div className="h-screen relative">
        <div
          className="z-0 h-[36%] bg-cover bg-center flex flex-col items-center gap-12"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/assets/pattern-bg-desktop.png')`,
          }}
        >
          <h1 className="text-white text-5xl font-semibold tracking-wide mt-12">
            IP Address Tracker
          </h1>
          <Search />
          <DataDisplay />
        </div>
        <div className="h-[64%] relative z-0">
          <Map />
        </div>
      </div>
    );
  }
