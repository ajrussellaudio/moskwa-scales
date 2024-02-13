import { render, screen, within } from "@testing-library/react";
import { ComponentProps } from "react";
import { ScaleDropdown } from "./ScaleDropdown";
import { SCALE_PRESETS } from "../../constants/scales";
import userEvent from "@testing-library/user-event";

class MockPointerEvent extends Event {
  button: number;
  ctrlKey: boolean;
  pointerType: string;

  constructor(type: string, props: PointerEventInit) {
    super(type, props);
    this.button = props.button || 0;
    this.ctrlKey = props.ctrlKey || false;
    this.pointerType = props.pointerType || "mouse";
  }
}
window.PointerEvent = MockPointerEvent as never;
window.HTMLElement.prototype.scrollIntoView = vi.fn();
window.HTMLElement.prototype.releasePointerCapture = vi.fn();
window.HTMLElement.prototype.hasPointerCapture = vi.fn();

const defaultProps: ComponentProps<typeof ScaleDropdown> = {
  selectedScale: [],
  onChange: () => null,
};

const renderComponent = (props: Partial<ComponentProps<typeof ScaleDropdown>> = {}) =>
  render(<ScaleDropdown {...defaultProps} {...props} />);

describe("ScaleDropdown", () => {
  it("renders correctly", async () => {
    renderComponent();
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    await userEvent.click(select);
    expect(select).toHaveAttribute("aria-expanded", "true");
    SCALE_PRESETS.forEach((scalePreset) => {
      expect(screen.getByRole("option", { name: scalePreset.name })).toBeInTheDocument();
    });
  });

  it("passes the selected scale to onChange", async () => {
    const onChange = vi.fn();
    renderComponent({ onChange });
    const selectedScale = SCALE_PRESETS[1];
    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.click(screen.getByRole("option", { name: selectedScale.name }));
    expect(onChange).toHaveBeenCalledWith(selectedScale.notes);
  });

  it("selects a scale option if that scale is entered", () => {
    const onChange = vi.fn();
    const selectedScale = SCALE_PRESETS[3];
    renderComponent({ selectedScale: selectedScale.notes, onChange });
    const select = screen.getByRole("combobox");
    expect(within(select).getByText(selectedScale.name)).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
  });
});
