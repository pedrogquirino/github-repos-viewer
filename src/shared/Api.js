import axios from "axios";
import HandlerHttpError from '../utils/HandlerHttpError';


const httpHeaders = {
    "Content-Type": "application/json",
    //"Authorization": "<user access token>"
    "Authorization": "token e1296fcfb3b65b30e0881f2b3f6257ae9aae235e"
}


export const getAll = async (url) => {
    
    try{
        const response = await axios({
            url: url,
            method:"get",
            headers: httpHeaders
        });                                        

        return response;
    }
    catch(error) {             
        HandlerHttpError(error);
    }
}

export function create(url,headers, data) {

    console.log(JSON.stringify(data))

    return fetch(url,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }
    )
    .then(res => res)    
    .catch(console.log)
}