import {PostModel} from './../data/fetchPosts.tsx';
import React from "react";
import "./PostsList.scss"



interface PostsListProps {
    posts: PostModel[];
}

const PostsList: React.FC<PostsListProps> = (props: PostsListProps) => {
    return (
        <div className='container'>
            {props.posts.map(post => 
                (<div key={post.id}>
                    {post.postedBy.username}
                    <img className='setimage' src={post.imageUrl} />
                    {post.message}
                    {/* {post.createdAt} */}
                    {/* {post.likedBy.length} */}
                    <div className='likedby'>Liked By: {post.likedBy.map(user => (
                        <div key={user.id}>{user.username} </div>
                    ))}</div>
                    {/* {post.dislikedBy.length} */}
                    <div className='dislikedby'>Disliked By: {post.dislikedBy.map(user => (
                        <div key={user.id}>{user.username} </div>
                    ))}</div>
                
                </div>)
            )}
            {/* {props.posts[0].id} */}
        </div>
    );

};

export default PostsList;