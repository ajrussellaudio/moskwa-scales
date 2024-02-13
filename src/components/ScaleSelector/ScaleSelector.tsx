import { NOTES } from "../../constants/notes";
import { Toggle } from "../ui/toggle";

type ScaleSelectorProps = {
  selection?: BooleanScale;
  onChange: (noteIndex: number) => void;
};

export function ScaleSelector({ selection = new Array(12).fill(false), onChange }: ScaleSelectorProps) {
  return (
    <div className="flex items-center space-x-4">
      {NOTES.map((note, i) => (
        <Toggle key={note} pressed={selection[i]} onPressedChange={() => onChange(i)}>
          {note}
        </Toggle>
      ))}
    </div>
  );
}
