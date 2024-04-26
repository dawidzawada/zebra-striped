import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to ZebraStriped.web.ts
// and on native platforms to ZebraStriped.ts
import ZebraStripedModule from "./ZebraStripedModule";
import ZebraCode from "./ZebraCode";
import { ChangeEventPayload, ZebraCodeProps } from "./ZebraStriped.types";

// Get the native constant value.
export const PI = ZebraStripedModule.PI;

export function hello(): string {
  return ZebraStripedModule.hello();
}

export async function setValueAsync(value: string) {
  return await ZebraStripedModule.setValueAsync(value);
}

const emitter = new EventEmitter(
  ZebraStripedModule ?? NativeModulesProxy.ZebraStriped
);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export { ZebraCode, ZebraCodeProps, ChangeEventPayload };
