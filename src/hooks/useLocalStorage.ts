import { useState } from "react";

export function useLocalStarage<T>(item: string){
  const storedValue = localStorage.getItem(item);
  const [value, setValue] = useState(storedValue ? JSON.parse(storedValue) : '');


  const updateLocalStorage = (newValue: T ) =>{
    setValue(newValue)
    localStorage.setItem(item,JSON.stringify(newValue))
  }

  return{
    value,
    updateLocalStorage
  }
}