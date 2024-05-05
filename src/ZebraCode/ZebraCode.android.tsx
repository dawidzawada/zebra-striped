import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";
import {
  ZebraCodeProps,
  ZebraCodeNativeAndroidProps,
} from "../ZebraStriped.types";

const NativeView: React.ComponentType<ZebraCodeNativeAndroidProps> =
  requireNativeViewManager("ZebraStriped");

export default function ZebraCode({ size, ...props }: ZebraCodeProps) {
  return (
    <NativeView
      {...props}
      size={[size.width, size.height]}
      style={[props.style, { ...size }]}
    />
  );
}
