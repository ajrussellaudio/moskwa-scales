import { SCALE_PRESETS } from "../../constants/scales";

type ScaleDropdownProps = {
  scales?: Array<ScalePreset>;
  selectedScale: BooleanScale;
  onChange: (selectedScale: BooleanScale) => void;
};

export function ScaleDropdown({ scales = SCALE_PRESETS, selectedScale, onChange }: ScaleDropdownProps) {
  const findSelectedScale = scales.find(({ notes }) => notes.every((note, i) => note === selectedScale[i]));

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const newSelectedScale = scales.find(({ name }) => name === event.currentTarget.value);
    if (newSelectedScale) {
      onChange(newSelectedScale.notes);
    }
  };

  return (
    <select onChange={handleChange} value={findSelectedScale?.name || "default"}>
      <option disabled value="default">
        Choose a preset...
      </option>
      {scales.map((scale) => (
        <option key={scale.name}>{scale.name}</option>
      ))}
    </select>
  );
}
