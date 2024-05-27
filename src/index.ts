import ZebraStripedModule from "./ZebraStripedModule";
import ZebraCode from "./ZebraCode/ZebraCode";
import { ZebraCodeProps, CodeSize } from "./ZebraStriped.types";
import { Platform } from "react-native";

export function getBase64Code(
  value: string,
  format: string,
  size: CodeSize,
  onColor?: string,
  offColor?: string
): string | null {
  if (Platform.OS === "android") {
    return ZebraStripedModule.getBase64Code(
      value,
      format,
      [size.width, size.height],
      onColor,
      offColor
    );
  }

  return ZebraStripedModule.getBase64Code(
    value,
    format,
    size,
    onColor,
    offColor
  );
}

export { ZebraCode, ZebraCodeProps, CodeSize };
