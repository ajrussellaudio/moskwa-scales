import { SCALE_PRESETS } from "../../constants/scales";
import { useScales } from "../../hooks/useScales";
import { ScaleDropdown } from "../ScaleDropdown/ScaleDropdown";
import { ScaleSelector } from "../ScaleSelector";

export function ScalesMatrix() {
  const { scales, toggleNote, setScale } = useScales();
  return (
    <>
      {scales.map((scale, i) => (
        <div key={i}>
          <ScaleSelector selection={scale} onChange={(noteIndex) => toggleNote(i, noteIndex)} />
          <ScaleDropdown scales={SCALE_PRESETS} onChange={(selectedScale) => setScale(i, selectedScale)} />
        </div>
      ))}
    </>
  );
}
