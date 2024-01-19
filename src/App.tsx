import { DownloadButton } from "./components/DownloadButton";
import { Readout } from "./components/Readout";
import { ScalesMatrix } from "./components/ScalesMatrix";
import { ScalesProvider } from "./context/Scales";

function App() {
  return (
    <ScalesProvider>
      <ScalesMatrix />
      <br />
      <Readout />
      <DownloadButton />
    </ScalesProvider>
  );
}

export default App;
