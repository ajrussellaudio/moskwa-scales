import { Readout } from "./components/Readout";
import { ScalesMatrix } from "./components/ScalesMatrix";
import { ScalesProvider } from "./context/Scales";

function App() {
  return (
    <ScalesProvider>
      <ScalesMatrix />
      <br />
      <Readout />
    </ScalesProvider>
  );
}

export default App;
