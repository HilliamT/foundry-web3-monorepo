import { useEffect, useState } from "react";

/**
 * Hook to determine if the component is mounted.
 * @returns {boolean}
 */
export const useIsMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
};
