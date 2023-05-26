import React, {useMemo, useState} from 'react';
const Hook = () => {
  const [mainData, setMainData] = useState<any>([
    {name: 'Food', amount: 0},
    {name: 'Travel', amount: 0},
    {name: 'Movies', amount: 0},
    {name: 'Hospital', amount: 0},
    {EmpId: ''},
    {lastupdated: ''},
    {billingdetails:[]}
  ]);
  const memo = useMemo(
    () => ({mainData, setMainData}),
    [mainData, setMainData],
  );
  return {memo};
};
export default Hook;
