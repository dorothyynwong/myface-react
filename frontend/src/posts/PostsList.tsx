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
                    <img className='setimage' src={post.imageUrl} />
                    {post.message}
                    {/* {post.createdAt} */}
                    {post.likedBy.length}
                    {post.dislikedBy.length}
                
                </div>)
            )}
            {/* {props.posts[0].id} */}
        </div>
    );

};

export default PostsList;