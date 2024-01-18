import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { ScaleDropdown } from "./ScaleDropdown";
import { SCALE_PRESETS } from "../../constants/scales";
import userEvent from "@testing-library/user-event";

const defaultProps: ComponentProps<typeof ScaleDropdown> = {
  scales: [],
  onChange: () => null,
};

const renderComponent = (props: Partial<ComponentProps<typeof ScaleDropdown>> = {}) =>
  render(<ScaleDropdown {...defaultProps} {...props} />);

describe("ScaleDropdown", () => {
  it("renders correctly", () => {
    renderComponent({ scales: SCALE_PRESETS });
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: /preset/i })).toBeDisabled();
    SCALE_PRESETS.forEach((scalePreset) => {
      expect(screen.getByRole("option", { name: scalePreset.name })).toBeInTheDocument();
    });
  });

  it("passes the selected scale to onChange", async () => {
    const onChange = vi.fn();
    renderComponent({ scales: SCALE_PRESETS, onChange });
    const selectedScale = SCALE_PRESETS[1];
    await userEvent.selectOptions(screen.getByRole("combobox"), selectedScale.name);
    expect(onChange).toHaveBeenCalledWith(selectedScale.scale);
  });
});
