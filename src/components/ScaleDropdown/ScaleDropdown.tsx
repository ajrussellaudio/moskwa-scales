import { SCALE_PRESETS } from "../../constants/scales";
import { Select, SelectGroup, SelectItem, SelectContent, SelectValue, SelectTrigger } from "../ui/select";

type ScaleDropdownProps = {
  scales?: Array<ScalePreset>;
  selectedScale: BooleanScale;
  onChange: (selectedScale: BooleanScale) => void;
};

export function ScaleDropdown({ scales = SCALE_PRESETS, selectedScale, onChange }: ScaleDropdownProps) {
  const findSelectedScale = scales.find(({ notes }) => notes.every((note, i) => note === selectedScale[i]));

  const handleChange = (value: string) => {
    const newSelectedScale = scales.find(({ name }) => name === value);
    if (newSelectedScale) {
      onChange(newSelectedScale.notes);
    }
  };

  return (
    <Select onValueChange={handleChange} value={findSelectedScale?.name}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Choose a preset..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {scales.map((scale) => (
            <SelectItem key={scale.name} value={scale.name}>
              {scale.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
