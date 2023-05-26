import { createContext } from 'react';
interface I {
  theme: String;
  Change: (i: String) => null;
}
export const User = createContext<I>({
  theme: '',
  Change: (i: String) => null,
});
