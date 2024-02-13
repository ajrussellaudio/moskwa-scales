import { Output } from "./components/Output";
import { ScalesMatrix } from "./components/ScalesMatrix";
import { ScalesProvider } from "./context/Scales";

function App() {
  return (
    <ScalesProvider>
      <ScalesMatrix />
      <br />
      <Output />
    </ScalesProvider>
  );
}

export default App;
