import React, { createContext, useState } from "react";

export const GlobalStateContext = createContext<[any[], React.Dispatch<React.SetStateAction<any[]>>]>([[], () => {}]);

export const GlobalStateProvider = ( props :any) => {
    const [state, setState] = useState<any[]>([]);
  
    return (
      <GlobalStateContext.Provider value={[state, setState]}>
        {props.children} 
      </GlobalStateContext.Provider>
    );
  };