import axios from 'axios';

const baseURL = "http://6e427b8e5e44.ngrok.io" // need to change this

export function universalFetch(
    setResponse, // should be the setState from a state set up like: const [state, setState] = useState({data: null, loading: false, error: true})
    endpoint, // endpoint path
    onSuccess, // optional function to run when call is a success
    onError, // optional function to run when the call fails
    options // set up like this options = { headers: {‘Authorization’: `token`}
) {
    console.log('Fetch started');
    setResponse({
        data: null,
        loading: true,
        error: null,
    });
    axios
        .get(`${baseURL}${endpoint}`, options)
        .then((resp) => {
            console.log('Response received');
            console.log(resp.data);
            setResponse({
                data: resp.data,
                loading: false,
                error: null,
            });
            onSuccess && onSuccess(resp.data);
        })
        .catch((err) => {
            console.log(`Fetch failed with error ${err.message}`);
            setResponse({
                data: null,
                loading: false,
                error: err.message,
            });
            onError && onError(err.message);
        });
}

export function universalPost(
    setResponse,
    endpoint,
    data, // Data to post
    onSuccess,
    onError,
    options
) {
    console.log("Post Started");
    setResponse({
        data: null,
        loading: true,
        error: null
    })
    axios
        .post(`${baseURL}${endpoint}`, data, options)
        .then((resp) => {
            console.log("Response received");
            console.log(resp.data);
            setResponse({
                data: resp.data,
                loading: false,
                error: null,
            });
            onSuccess && onSuccess(resp.data);
        })
        .catch((err) => {
            console.log(`Post failed with error ${err.message}`);
            setResponse({
                data: null,
                loading: false,
                error: err.message,
            });
            onError && onError(err.message);
        })
}

export function universalDelete(
    setResponse,
    endpoint,
    onSuccess,
    onError,
    options
) {
    console.log("Delete Started");
    setResponse({
        data: null,
        loading: true,
        error: null
    })
    axios
        .delete(`${baseURL}${endpoint}`, options)
        .then((resp) => {
            console.log("Response received");
            console.log(resp.data);
            setResponse({
                data: resp.data,
                loading: false,
                error: null,
            });
            onSuccess && onSuccess(resp.data);
        })
        .catch((err) => {
            console.log(`Delete failed with error ${err.message}`);
            setResponse({
                data: null,
                loading: false,
                error: err.message,
            });
            onError && onError(err.message);
        })
}