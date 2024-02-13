import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentProps } from "react";
import { ScaleSelector } from "./ScaleSelector";
import { NOTES } from "../../constants/notes";

const defaultProps: ComponentProps<typeof ScaleSelector> = {
  onChange: () => null,
};

const renderComponent = (props: Partial<ComponentProps<typeof ScaleSelector>> = {}) =>
  render(<ScaleSelector {...defaultProps} {...props} />);

describe("ScaleSelector", () => {
  it("displays a toggle for each note", () => {
    renderComponent();
    expect(screen.getAllByRole("button")).toHaveLength(NOTES.length);
    NOTES.forEach((note) => {
      expect(screen.getByRole("button", { name: note })).toBeInTheDocument();
    });
  });

  it("toggle is active if the note is selected", () => {
    const noteSelections = [
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
    ] satisfies BooleanScale;
    renderComponent({ selection: noteSelections });

    screen.getAllByRole("button").forEach((button, i) => {
      if (noteSelections[i]) {
        expect(button).toHaveAttribute("aria-pressed", "true");
      } else {
        expect(button).toHaveAttribute("aria-pressed", "false");
      }
    });
  });

  it("passes up a selected scale", async () => {
    const noteSelections = new Array(12).fill(false) satisfies BooleanScale;
    const onChange = vi.fn();
    renderComponent({ selection: noteSelections, onChange });
    await userEvent.click(screen.getByRole("button", { name: "D" }));
    expect(onChange).toHaveBeenCalledWith(2);
  });
});
