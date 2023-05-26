import React, { useState, useCallback, useEffect, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Hook() {
  const [theme, set] = useState('');
  useEffect(() => {
    const Store = async () => {
      const get = await AsyncStorage.getItem('theme');
      if (get) {
        set(get);
      }
    };
    Store();
  }, []);
  const Change = useCallback((i: any) => {
    set(i);
    AsyncStorage.setItem('theme', i);
  }, []);
  const The = useMemo(() => ({ theme, Change }), [theme, Change]);
  return { The };
}
export default Hook;
