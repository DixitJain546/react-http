import React, { Component } from 'react';
import axios from 'axios';

class PostsListGet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            errorMessage: ""
        }
    }
    

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( response => {
                this.setState({posts: response.data})
            }
        )
        .catch( error => {
                this.setState({errorMessage: error.message})
            }
        )
    }

    render() { 
        const {posts,errorMessage} = this.state
        return ( 
            <div>
                List of Posts : <br />
                {
                    posts.length ? 
                    posts.map(post =><div key={post.id}> {post.title} </div>) : errorMessage
                }
            </div>
         )
        }
}
 
export default PostsListGet;