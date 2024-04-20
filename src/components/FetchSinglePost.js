import React, {useState, useEffect} from 'react';
import axios from 'axios';

function FetchSinglePost() {

 const [id, setId] = useState(1)
 const [post, setPost] = useState([])

 useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            console.log(response.data.title)
            setPost(response.data.title)
        })
        .catch(error => console.log(`${error.message}`))
 }, [id])

    return (
        <>
            <input type="number" value={id} onChange={(e) => {setId(e.target.value)}} /><br/>
            <h1>{post}</h1>
        </>
      );
}

export default FetchSinglePost;