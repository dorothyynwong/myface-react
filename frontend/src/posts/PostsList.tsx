import {PostModel} from './../data/fetchPosts.tsx';
import React from "react";
import "./PostsList.css"
// import moment from "moment";

interface PostsListProps {
    posts: PostModel[];
}

const PostsList: React.FC<PostsListProps> = (props: PostsListProps) => {
    return (
        <div>
            {props.posts.map(post => 
                (<div key={post.id}>
                    {post.postedBy.username}
                    <img className='setimage' src={post.imageUrl} />
                    {post.message}
                    {/* {post.createdAt} */}
                    {/* {post.likedBy.length} */}
                    <div>Liked By: {post.likedBy.map(user => (
                        <div key={user.id}>{user.username} </div>
                    ))}</div>
                    {/* {post.dislikedBy.length} */}
                    <div>Disliked By: {post.dislikedBy.map(user => (
                        <div key={user.id}>{user.username} </div>
                    ))}</div>
                
                </div>)
            )}
            {/* {props.posts[0].id} */}
        </div>
    );

};

export default PostsList;