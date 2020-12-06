import React, {Component} from 'react';
import Post from "../post/Post";

class AllPosts extends Component {

    state = {posts: [], chosenOne: null};

    onSelectPost = (id) => {
        let {posts} = this.state;
        let find = posts.find(value => value.id === id);
        this.setState({chosenOne: find});
    };

    render() {
        let {posts, chosenOne} = this.state;
        return (
            <div>
                {
                    posts.map(post => <Post item={post} key={post.id} onSelectPost={this.onSelectPost()}/>)
                }
                {
                    chosenOne && <h3> {chosenOne.id} - {chosenOne.title} </h3>
                }
            </div>
        );
    }
    componentDidMount() {
        console.log('posts')
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                this.setState({posts});
            });
    }
}

export default AllPosts;
