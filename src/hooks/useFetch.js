import { useState, useEffect } from "react";

export default function useFetch(url) {

    const [data, setData] = useState(0);

    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => setData(data));
      }, [url]);

    return {
        data
    }
}
