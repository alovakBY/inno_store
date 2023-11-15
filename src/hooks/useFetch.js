import { useEffect, useState } from "react";

export const useFetch = (url) => {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [errors, setErrors] = useState(null);

   useEffect(() => {
      setIsLoading(true);
      setErrors(null);
      fetch(url)
         .then((json) => json.json())
         .then((data) => setData(data))
         .catch((err) => setErrors(err.message))
         .finally(() => setIsLoading(false));
   }, [url]);

   return {
      data,
      isLoading,
      errors,
   };
};
