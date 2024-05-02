import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";
import { ZebraCodeProps } from "./ZebraStriped.types";

const NativeView: React.ComponentType<ZebraCodeProps> =
  requireNativeViewManager("ZebraStriped");

export default function ZebraCode(props: ZebraCodeProps) {
  return (
    <NativeView
      {...props}
      style={[
        props.style,
        { width: props.size.width, height: props.size.height },
      ]}
    />
  );
}
