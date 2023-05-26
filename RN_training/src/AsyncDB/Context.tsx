import {useMemo, useState} from 'react';
export function Store() {
  const [data, setData] = useState<any>([]);
  const mainData = useMemo(() => ({data, setData}), [data, setData]);
  return {mainData};
}
