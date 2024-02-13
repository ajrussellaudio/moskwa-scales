import { useScales } from "../../hooks/useScales";
import { stringifyScales } from "../../lib/stringifyScales";
import { Textarea } from "../ui/textarea";

export function Readout() {
  const { scales } = useScales();
  return <Textarea readOnly value={stringifyScales(scales)} rows={8} cols={23} className="font-mono" />;
}
