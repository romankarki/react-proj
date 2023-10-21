import React, { useContext, useEffect } from "react";
import { getRequest } from "../hooks/apiClient/apiCall";
import { useQuery } from "@tanstack/react-query";
import { GlobalStateContext } from "../states/appContext";

const ShowCase: React.FC =()=>{    
    const {data, isError, isLoading, isSuccess} = useQuery(['data'], ()=>getRequest("https://my-json-server.typicode.com/typicode/demo/posts"));
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setState] = useContext(GlobalStateContext);

    useEffect(() => {
        if (isSuccess && data) {
          setState([...data]);
        }
      }, [data, isSuccess, setState]);

    if(isLoading){
        return <div>Loading your data....</div>
    }
    if(isError){
        return <div>
            Sorry, something went wrong.
        </div>
    }
    
    
    return (
        <>
            Displaying Data 
            {
                data?.map((each:any)=>{
                    return(
                        <p key={each.id}>
                            {each.id}. {each.title}
                        </p>
                    )
                })
            }
        </>
    )
}

export default ShowCase;