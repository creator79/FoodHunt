import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from 'react-redux';



function useAlan() {
  const dispatch = useDispatch();

  useEffect(() => {
    alanBtn({
        key: "114004090df8c2a2949090f3ee63b2212e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (command, query) => {
        if (command === "search") {
           
        }
      },
    });
  }, []);
  
}

export default useAlan;
