import React, {useMemo, useState} from 'react';
function Context() {
  const [data, setData] = useState([]);
  const Main = useMemo(() => ({data, setData}), [data, setData]);
  return {Main};
}
export default Context;
