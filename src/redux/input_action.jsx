//input_action.jsx

export const dispatchAction = (nameFunc, payload) => ({
    type: nameFunc,
    payload,
});

import axios from "axios"; // You might use any HTTP library

const fetchApiData = async (url, requestData) => {
    try {
        if(url != undefined){
        const response = await axios.post(url, requestData);
        return response.data;
    }else{
        return []
    }
    } catch (err) {
        console.error(err);
        return [];
    }
};

export const fetchData = async (dispatch, search,usl) => {
    const apiUrl =usl ;// API_INFOAGEN_GetUser "http://localhost:5233/GetUser";
    const requestData = { AgentName: search };
    const Action = "FETCH_AGEN";
    const response = await fetchApiData(apiUrl, requestData);
    // console.log(Action, response)
    dispatch(dispatchAction(Action, response));
    return response;
};

export const fetchDatas = async (dispatch, url, req, Action) => {
    const response = await fetchApiData(url, req);
    // console.log(req)
    dispatch(dispatchAction(Action, response));
    return response.length;
};

export const SendPost = async (url, req) => {
    const response = await axios.post(url, req);
    return [response.status, response.data];
};




