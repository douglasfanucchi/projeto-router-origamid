import React, { useState } from 'react';

const useFetch = (uri) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  function request() {
    setLoading(true);

    fetch(uri)
      .then((r) => r.json())
      .then(setData)
      .finally(() => setLoading(false));
  }

  return { data, loading, request };
};

export default useFetch;
