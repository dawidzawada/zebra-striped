import * as React from 'react';

import { ZebraStripedViewProps } from './ZebraStriped.types';

export default function ZebraStripedView(props: ZebraStripedViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
