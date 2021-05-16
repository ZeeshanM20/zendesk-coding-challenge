import { useState, useEffect, useRef } from "react";

const PROXY_URL = "http://localhost:8080";

// The following is a custom hook, that takes a link, sends it to the server and returns the response
function useRequest() {
  const firstUpdate = useRef(true);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [apiUrl, setApiUrl] = useState("");

  useEffect(() => {
    if (!firstUpdate.current) {
      setIsLoading(true);
      fetch(PROXY_URL, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ url: apiUrl }),
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((e) => setError(e));
    }
    firstUpdate.current = false;
  }, [apiUrl]);

  return { setApiUrl, data, isLoading, error };
}

export default useRequest;
