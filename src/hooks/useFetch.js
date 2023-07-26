import { useEffect, useState } from 'react';

export function useFetch(fetchFn, deps){
  const [result, setResult] = useState({
    loading: true,
  });

  useEffect(() => {
    (async function () {
      try {
        setResult({ ...result, loading: true });
        const data = await fetchFn();
        setResult({ data, error: undefined, loading: false });
      } catch (error) {
        setResult({ ...result, error, loading: false });
      }
    })();

  }, deps);

  return result;
}
