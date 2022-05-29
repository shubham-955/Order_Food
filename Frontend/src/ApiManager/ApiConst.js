export const BASE_URL = 'http://localhost:8000/';

export const GetFetch = async (fetchURL) => {

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    const fetchCall = await fetch(fetchURL, {
        method: "GET",
        headers: headers,
    })

    const response = await fetchCall.json();
    console.log("response---------->", response);
    return response;
}

export const PostFetch = async (fetchURL, fetchBodyData) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const fetchData = JSON.stringify(fetchBodyData)

    const fetchCall = await fetch(fetchURL, {
        method: "POST",
        headers: headers,
        body: fetchData
    })

    const response = await fetchCall.json();
    console.log("response---------->", response);
    return response;
}

export const PutFetch = async (fetchURL, fetchBodyData) => {

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const fetchData = JSON.stringify(fetchBodyData)

    const fetchCall = await fetch(fetchURL, {
        method: "PUT",
        headers: headers,
        body: fetchData
    })

    const response = await fetchCall.json();
    console.log("response---------->", response);
    return response;
}

export const DeleteFetch = async (fetchURL) => {

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    const fetchCall = await fetch(fetchURL, {
        method: "DELETE",
        headers: headers,
    })

    const response = await fetchCall.json();
    console.log("response---------->", response);
    return response;
}