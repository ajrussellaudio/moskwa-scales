import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentProps } from "react";
import { ScaleSelector } from "./ScaleSelector";
import { NOTES } from "../../notes";

const defaultProps: ComponentProps<typeof ScaleSelector> = {
  onChange: () => null,
};

const renderComponent = (props: Partial<ComponentProps<typeof ScaleSelector>> = {}) =>
  render(<ScaleSelector {...defaultProps} {...props} />);

describe("ScaleSelector", () => {
  it("displays a checkbox for each note", () => {
    renderComponent();
    expect(screen.getAllByRole("checkbox")).toHaveLength(NOTES.length);
    NOTES.forEach((note) => {
      expect(screen.getByLabelText(note)).toBeInTheDocument();
    });
  });

  it("checks a box if the note is selected", () => {
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
    ] satisfies ScaleSelection;
    renderComponent({ selection: noteSelections });

    screen.getAllByRole("checkbox").forEach((checkbox, i) => {
      if (noteSelections[i]) {
        expect(checkbox).toBeChecked();
      } else {
        expect(checkbox).not.toBeChecked();
      }
    });
  });

  it("passes up a selected scale", async () => {
    const noteSelections = new Array(12).fill(false) satisfies ScaleSelection;
    const onChange = vi.fn();
    renderComponent({ selection: noteSelections, onChange });
    await userEvent.click(screen.getByLabelText("D"));
    expect(onChange).toHaveBeenCalledWith([
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
  });
});
