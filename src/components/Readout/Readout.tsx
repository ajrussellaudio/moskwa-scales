import { useScales } from "../../hooks/useScales";
import { stringifyScales } from "../../lib/stringifyScales";

export function Readout() {
  const { scales } = useScales();
  return <textarea readOnly value={stringifyScales(scales)} rows={8} cols={23} />;
}
