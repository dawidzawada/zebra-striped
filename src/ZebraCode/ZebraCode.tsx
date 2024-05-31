import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";
import {
  CodeSize,
  ZebraCodeProps,
  ZebraCodeNativeProps,
} from "../ZebraStriped.types";
import { Platform } from "react-native";

const NativeView: React.ComponentType<ZebraCodeNativeProps> =
  requireNativeViewManager("ZebraStriped");

export default function ZebraCode(props: ZebraCodeProps) {
  const { size, ...otherProps } = props;
  return (
    <NativeView
      {...otherProps}
      size={Platform.select<CodeSize | number[]>({
        ios: size,
        android: [size.width, size.height],
        default: size,
      })}
      style={[otherProps.style, { width: size.width, height: size.height }]}
    />
  );
}
