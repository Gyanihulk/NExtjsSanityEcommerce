import React, {
  useContext,
  createContext,
  useState,
  children,
  useEffect,
} from "react";
import { client } from "../lib/client";

const Context = createContext();
export const StateContext = ({ children }) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function setup() {
      const queryCategory = `*[_type=="category"]`;
      console.log(categories.length)
      if(categories.length===0){
      try{
        client.fetch(queryCategory).then((response) => {
          setCategories((categories) => [...categories, ...response]);
        }).catch(err=>{
          console.log(err)
        });
      }catch(err){
        consle.log(err)
      };}
      
    }
    setup();
  }, [children]);
  return <Context.Provider value={{ categories }}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
