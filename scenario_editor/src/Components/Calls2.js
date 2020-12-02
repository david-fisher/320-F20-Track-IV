import React, {Component} from 'react';
import axios from 'axios';

// import { baseURL } from '../../Constants/Config';

const baseURL = 'http://8dc68c369534.ngrok.io'
let TOKEN = "abcdefghijklmnopqrstuvwxyz";

// Universal fetch request using axios
export default function universalFetch(
    // setResponse, // should be the setState from a state set up like: const [state, setState] = useState({data: null, loading: false, error: true})
    endpoint, // endpoint path
    // onError, // optional function to run when call fails
    // onSuccess, // optional function to run when the call is a success
    options // set up like this options = { headers: {'Authorization': `token`} }
) {
    console.log('Fetch started');
    // setResponse({
    //     data: null,
    //     loading: true,
    //     error: null,
    // });
    axios
        .get(`${baseURL}${endpoint}`, options)
        .then((resp) => {
            console.log('Response received');
            console.log(resp);
            // setResponse({
            //     data: resp.data,
            //     loading: false,
            //     error: null,
            // });
            // onSuccess && onSuccess(resp.data);
            return(resp.data);
        })
        .catch((err) => {
            console.log(`Fetch failed with error ${err.message}`);
            // setResponse({
            //     data: null,
            //     loading: false,
            //     error: err.message,
            // });
            // onError && onError(err.message);
            return(err.message)
        });
}
