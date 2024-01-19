import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { DownloadButton } from "./DownloadButton";
import { ScalesProvider } from "../../context/Scales";

const renderComponent = (props: Partial<ComponentProps<typeof DownloadButton>> = {}) =>
  render(
    <ScalesProvider>
      <DownloadButton {...props} />
    </ScalesProvider>,
  );

describe("DownloadButton", () => {
  beforeAll(() => {
    URL.createObjectURL = vi.fn().mockImplementation(() => "GENERATED URL");
  });

  it("renders correctly", () => {
    renderComponent();
    const downloadLink = screen.getByRole("link", { name: /download/i });
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute("href", "GENERATED URL");
    expect(downloadLink).toHaveAttribute("download", "scales.txt");
  });
});
