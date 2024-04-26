import { ViewProps } from "react-native";

export type ChangeEventPayload = {
  value: string;
};

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

export type ZebraCodeProps = {
  value: string;
  format: CodeFormat;
  size: { width: number; height: number };
  onColor?: string;
  offColor?: string;
} & ViewProps;
