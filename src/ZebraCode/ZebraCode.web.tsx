import * as React from "react";
import { ZebraCodeProps } from "../ZebraStriped.types";

export default function ZebraCode(props: ZebraCodeProps) {
  return (
    <div>
      <span>
        Not supported platform(yet! ⏳), cannot generate code for value:
        {` ${props.value}`}
      </span>
    </div>
  );
}
