import ZebraStripedModule from "./ZebraStripedModule";
import ZebraCode from "./ZebraCode/ZebraCode";
import { ZebraCodeProps, CodeSize, CodeFormat } from "./ZebraStriped.types";
import { Platform } from "react-native";

export function getBase64Code(
  value: string,
  format: CodeFormat,
  size: CodeSize,
  onColor?: string,
  offColor?: string
): string | null {
  const nativeSize = Platform.select<CodeSize | number[]>({
    ios: size,
    android: [size.width, size.height],
    default: size,
  });

  return ZebraStripedModule.getBase64Code(
    value,
    format,
    nativeSize,
    onColor,
    offColor
  );
}

export { ZebraCode, ZebraCodeProps, CodeSize };
