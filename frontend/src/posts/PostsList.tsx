import {PostModel} from './../data/fetchPosts.tsx';
import React from "react";
import moment from "moment";

interface PostsListProps {
    posts: PostModel[];
}

const PostsList: React.FC<PostsListProps> = (props: PostsListProps) => {
    return (
        <div>
            {props.posts.map(post => 
                (<div>
                    {post.id}
                    <img src={post.imageUrl} />
                    {post.message}
                    {post.createdAt.format("yyyy-MM-dd")}
                    {post.likedBy.length}
                    {post.dislikedBy.length}
                
                </div>)
            )}
            {/* {props.posts[0].id} */}
        </div>
    );

};

export default PostsList;