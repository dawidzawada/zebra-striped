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

export type CodeSize = { width: number; height: number };

export interface ZebraCodeProps extends ViewProps {
  value: string;
  format: CodeFormat;
  size: CodeSize;
  onColor?: string;
  offColor?: string;
}

export interface ZebraCodeNativeAndroidProps
  extends Omit<ZebraCodeProps, "size"> {
  size: Array<number>;
}
