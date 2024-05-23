import ZebraStripedModule from "./ZebraStripedModule";
import ZebraCode from "./ZebraCode/ZebraCode";
import { ZebraCodeProps, CodeSize } from "./ZebraStriped.types";

export function getBase64Code(
  value: string,
  format: string,
  size: CodeSize,
  onColor?: string,
  offColor?: string
): string | null {
  return ZebraStripedModule.getBase64Code(
    value,
    format,
    size,
    onColor,
    offColor
  );
}

export { ZebraCode, ZebraCodeProps, CodeSize };
