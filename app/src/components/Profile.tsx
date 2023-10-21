import { useQuery } from "@tanstack/react-query"
import { getRequest } from "../hooks/apiClient/apiCall"

export const Profile : React.FC = () => {
    const {data, isLoading, isError, isSuccess} = useQuery(['profile'],()=>getRequest("https://my-json-server.typicode.com/typicode/demo/profile"))
    if(isError) return <div>something went wrong</div>
    if(isLoading) return <div> Loading  ....</div>
     
    if(isSuccess){

    }
    return(
        <div>
            <h2 style={{color:"tomato"}}>
                {data?.name}
            </h2>
        </div>
    )
}