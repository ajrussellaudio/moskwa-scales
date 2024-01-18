type ScaleDropdownProps = {
  scales: Array<{ name: string; scale: BooleanScale }>;
  onChange: (selectedScale: BooleanScale) => void;
};

export function ScaleDropdown({ scales, onChange }: ScaleDropdownProps) {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selectedScale = scales.find(({ name }) => name === event.currentTarget.value);
    if (selectedScale) {
      onChange(selectedScale.scale);
    }
  };

  return (
    <select onChange={handleChange} defaultValue="Preset...">
      <option disabled>Preset...</option>
      {scales.map((scale) => (
        <option key={scale.name}>{scale.name}</option>
      ))}
    </select>
  );
}
