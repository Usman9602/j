import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "user_input";

export const useInput = () => {
   const [inputValue, setInputValue] = useState("");
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      const fetchInputValue = async () => {
         const storedInput = await localStorage.getItem(LOCAL_STORAGE_KEY);
         if (storedInput) {
            setInputValue(storedInput);
         }
         setIsLoaded(true);
      };
      fetchInputValue();
   }, []);

   const saveInput = (value) => {
      setInputValue(value);
      localStorage.setItem(LOCAL_STORAGE_KEY, value);
   };

   return { inputValue, saveInput, isLoaded };
};
