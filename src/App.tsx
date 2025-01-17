import "./App.css";
import Routes from "Routes/Routes";

function App() {
  return (
    // <CacheBuster
    //   currentVersion={packageJson.version}
    //   isEnabled={isProduction} //If false, the library is disabled.
    //   isVerboseMode={false} //If true, the library writes verbose logs to console.
    //   loadingComponent={<FullScreenLoading />} //If not pass, nothing appears at the time of new version check.
    //   metaFileDirectory={"."} //If public assets are hosted somewhere other than root on your server.
    // >
    <div className="w-screen h-screen overflow-y-auto flex justify-center items-start">
      <Routes />
    </div>
    // </CacheBuster>
  );
}

export default App;
