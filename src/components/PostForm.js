import React, { Component } from 'react';
import axios from 'axios';


class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            title: "",
            body: ""
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
            .then( response => {console.log(response)})
            .catch( error => {console.log(error.message)})
    }
    
    render() { 
        const {userId, title, body} = this.state
        return (  
            <form onSubmit={this.onSubmitForm}>
                <div><input name="userId" type="text" value={userId} onChange={this.onChangeHandler} /></div>
                <div><input name="title" type="text" value={title} onChange={this.onChangeHandler} /></div>
                <div><input name="body" type="text" value={body} onChange={this.onChangeHandler} /></div>
                <div><button type="submit">Submit Post</button></div>
            </form>
        );
    }
}
 
export default PostForm;