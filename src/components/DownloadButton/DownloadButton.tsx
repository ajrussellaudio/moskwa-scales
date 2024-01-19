import { useScales } from "../../hooks/useScales";
import { stringifyScales } from "../../lib/stringifyScales";

export function DownloadButton() {
  const { scales } = useScales();

  const url = URL.createObjectURL(new Blob([stringifyScales(scales)]));

  return (
    <a href={url} download="scales.txt">
      Download <code>scales.txt</code> (191 bytes)
    </a>
  );
}
