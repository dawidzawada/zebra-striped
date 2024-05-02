import * as React from "react";
import { ZebraCodeProps } from "./ZebraStriped.types";

export default function ZebraStripedView(props: ZebraCodeProps) {
  return (
    <div>
      <span>{props.value}</span>
    </div>
  );
}
