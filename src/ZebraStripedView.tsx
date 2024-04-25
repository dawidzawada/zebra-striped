import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ZebraStripedViewProps } from './ZebraStriped.types';

const NativeView: React.ComponentType<ZebraStripedViewProps> =
  requireNativeViewManager('ZebraStriped');

export default function ZebraStripedView(props: ZebraStripedViewProps) {
  return <NativeView {...props} />;
}
