import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { ScaleDropdown } from "./ScaleDropdown";
import { SCALE_PRESETS } from "../../constants/scales";
import userEvent from "@testing-library/user-event";

const defaultProps: ComponentProps<typeof ScaleDropdown> = {
  selectedScale: [],
  onChange: () => null,
};

const renderComponent = (props: Partial<ComponentProps<typeof ScaleDropdown>> = {}) =>
  render(<ScaleDropdown {...defaultProps} {...props} />);

describe("ScaleDropdown", () => {
  it("renders correctly", () => {
    renderComponent();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: /preset/i })).toBeDisabled();
    SCALE_PRESETS.forEach((scalePreset) => {
      expect(screen.getByRole("option", { name: scalePreset.name })).toBeInTheDocument();
    });
  });

  it("passes the selected scale to onChange", async () => {
    const onChange = vi.fn();
    renderComponent({ onChange });
    const selectedScale = SCALE_PRESETS[1];
    await userEvent.selectOptions(screen.getByRole("combobox"), selectedScale.name);
    expect(onChange).toHaveBeenCalledWith(selectedScale.notes);
  });

  it("selects a scale option if that scale is entered", () => {
    const onChange = vi.fn();
    const selectedScale = SCALE_PRESETS[3];
    renderComponent({ selectedScale: selectedScale.notes, onChange });
    expect(screen.getByRole("combobox")).toHaveDisplayValue(selectedScale.name);
    expect(onChange).not.toHaveBeenCalled();
  });
});
