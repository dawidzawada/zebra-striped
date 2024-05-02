import { ViewProps } from "react-native";

export type CodeFormat =
  | "code-128"
  | "code-39"
  | "code-93"
  | "codabar"
  | "ean-13"
  | "ean-8"
  | "itf"
  | "upc-e"
  | "upc-a"
  | "qr"
  | "pdf-417"
  | "aztec"
  | "data-matrix";

export interface ZebraCodeProps extends ViewProps {
  value: string;
  format: CodeFormat;
  size: { width: number; height: number };
  onColor?: string;
  offColor?: string;
}

export interface ZebraCodeNativeAndroidProps
  extends Omit<ZebraCodeProps, "size"> {
  size: Array<number>;
}
