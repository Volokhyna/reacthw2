import React, {Component} from 'react';
import Post from "../post/Post";
import {PostService} from "../Services/PostServise";

class AllPosts extends Component {

    newpost = new PostService();

    state = {posts: [], chosenOne: null};

    // onSelectPost = (id) => {
    //     let {posts} = this.state;
    //     let find = posts.find(value => value.id === id);
    //     this.setState({chosenOne: find});
    // };

    onSelectPost = (id) => {
        this.newpost.getPostById(id).then(value => this.setState({chosenOne: value}))
    };

    render() {
        let {posts, chosenOne} = this.state;
        return (
            <div>
                {
                    posts.map(post => <Post item={post} key={post.id} onSelectPost= {this.onSelectPost}/>)
                }
                {
                    chosenOne && <h3> {chosenOne.id} - {chosenOne.title} </h3>
                }
            </div>
        );
    }
    componentDidMount() {
       this.newpost.getAllPosts().then(value => this.setState({posts: value}))
    }
}

export default AllPosts;
