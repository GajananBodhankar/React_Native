import {useMemo, useState} from 'react';

export function Context() {
  const [id, setId] = useState<any>();
  const callBack = useMemo(() => ({id, setId}), [id, setId]);
  return {callBack};
}
