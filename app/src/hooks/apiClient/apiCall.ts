export const getRequest = async (url : any) => {
    const response : any = await fetch(url);
    if(!Boolean(response)){
        throw new Error("Somethign went wrong while fetching data from database");
    }
    return response.json();
}

export const postRequest = async () => {
    return null;
}