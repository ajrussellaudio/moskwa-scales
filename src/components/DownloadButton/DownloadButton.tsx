import { FileDown } from "lucide-react";
import { useScales } from "../../hooks/useScales";
import { stringifyScales } from "../../lib/stringifyScales";
import { Button } from "../ui/button";

export function DownloadButton() {
  const { scales } = useScales();

  const url = URL.createObjectURL(new Blob([stringifyScales(scales)]));

  return (
    <Button asChild className="gap-2">
      <a href={url} download="scales.txt">
        <FileDown />
        Download scales file
      </a>
    </Button>
  );
}
