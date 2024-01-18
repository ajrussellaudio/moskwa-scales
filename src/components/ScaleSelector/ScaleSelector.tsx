import { toggleAtIndex } from "../../lib/toggleAtIndex";
import { NOTES } from "../../notes";

type ScaleSelectorProps = {
  selection?: BooleanScale;
  onChange: (scale: BooleanScale) => void;
};

export function ScaleSelector({ selection = new Array(12).fill(false), onChange }: ScaleSelectorProps) {
  return (
    <>
      {NOTES.map((note, i) => (
        <label key={note}>
          {note}
          <input
            type="checkbox"
            id={note}
            checked={selection[i]}
            onChange={() => onChange(toggleAtIndex(selection, i))}
          />
        </label>
      ))}
    </>
  );
}
