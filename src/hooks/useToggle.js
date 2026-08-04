import { useState, useCallback } from "react";

export default function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue((v) => !v), []);
  const close = useCallback(() => setValue(false), []);
  const open = useCallback(() => setValue(true), []);
  return [value, { toggle, close, open }];
}