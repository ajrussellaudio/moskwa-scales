import { NOTES } from "../../constants/notes";

type ScaleSelectorProps = {
  selection?: BooleanScale;
  onChange: (noteIndex: number) => void;
};

export function ScaleSelector({ selection = new Array(12).fill(false), onChange }: ScaleSelectorProps) {
  return (
    <div>
      {NOTES.map((note, i) => (
        <label key={note}>
          {note}
          <input type="checkbox" id={note} checked={selection[i]} onChange={() => onChange(i)} />
        </label>
      ))}
    </div>
  );
}
