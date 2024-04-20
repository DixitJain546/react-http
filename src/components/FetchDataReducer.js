import React, {useReducer, useEffect} from 'react';
import axios from 'axios'

function FetchDataReducer() {

    const initialState = {
        loading: true,
        post: {},
        error: ""
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case "SUCCESS" : return {
                loading: false, 
                post: action.data,
                error: ""
            }
            case "FAILED" : return {
                loading: false,
                post: {},
                error: "Something Went Wrong"
            }
            default: return state
        }
    }
    
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => dispatch({type: "SUCCESS", data: response.data}))
            .catch(error => dispatch({type: "FAILED"}))
    })  

    return ( 
        <div>
            { (state.loading) ? 'Loading' : state.post.title }
            { state.error ? state.error : null}
        </div>
     );
}

export default FetchDataReducer;