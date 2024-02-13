import { DownloadButton } from "../DownloadButton";
import { Readout } from "../Readout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function Output() {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>Scales</CardTitle>
        <CardDescription>
          Copy the scales below, or download <code>scales.txt</code> (191 bytes).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Readout />
        <DownloadButton />
      </CardContent>
    </Card>
  );
}
