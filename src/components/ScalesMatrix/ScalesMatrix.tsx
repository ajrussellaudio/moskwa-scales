import { useScales } from "../../hooks/useScales";
import { ScaleSelector } from "../ScaleSelector";

export function ScalesMatrix() {
  const { scales, toggleNote } = useScales();
  return (
    <div>
      {scales.map((scale, i) => (
        <ScaleSelector key={i} selection={scale} onChange={(noteIndex) => toggleNote(i, noteIndex)} />
      ))}
    </div>
  );
}
