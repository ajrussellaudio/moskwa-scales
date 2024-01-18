import { ScalesMatrix } from "./components/ScalesMatrix";
import { ScalesProvider } from "./context/Scales";

function App() {
  return (
    <ScalesProvider>
      <ScalesMatrix />
    </ScalesProvider>
  );
}

export default App;
