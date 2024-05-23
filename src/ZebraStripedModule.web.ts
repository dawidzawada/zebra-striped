import { CodeSize } from "./ZebraStriped.types";

export default {
  getBase64Code(
    value: string,
    _format: string,
    _size: CodeSize,
    _onColor?: string,
    _offColor?: string
  ) {
    return `Not supported platform(yet! ⏳), cannot generate code for value: ${value}`;
  },
};
