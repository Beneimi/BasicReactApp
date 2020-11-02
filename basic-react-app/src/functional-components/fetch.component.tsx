import React, {useEffect, useState} from 'react';

interface Response{
    page: string
}

export const Fetch = () => {

    const[response, setResponse] = useState<Response| null>(null);

    const callAPI = () => {
        console.log("call api called")
        fetch('http://localhost:9000/testAPI')
        .then(resp => resp.json())
        .then((data: Response) =>{
            setResponse(data);
        })
    }

    useEffect(callAPI,[]);


    const renderPage = () => {
        console.log("renderpage called")
        return <div>{response?.page}</div>;
    }

    return <div>{renderPage()}</div>;

}