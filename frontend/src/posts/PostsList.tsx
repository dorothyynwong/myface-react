import {PostModel} from './../data/fetchPosts.tsx';
import React from "react";
import "./PostsList.scss"



interface PostsListProps {
    posts: PostModel[];
}

const PostsList: React.FC<PostsListProps> = (props: PostsListProps) => {
    const handleInteraction = (postId:number, interaction: string) => {

        const actionUrl = `http://localhost:3001/posts/${postId}/${interaction}/`;
        try {
            fetch(actionUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className='container'>
            {props.posts.map(post => 
                (<div key={post.id}>
                    {post.postedBy.username}
                    <img className='setimage' src={post.imageUrl} />
                    {post.message}
                    {/* {post.createdAt} */}
                    {/* {post.likedBy.length} */}
                    <div className="buttonBox">
                        <div>
                            <button className = 'like-button' id={`like-button-${post.id}`} onClick={() => handleInteraction(post.id, "like")}>Like</button>
                        </div>
                        <div>
                            <button className= 'dislike-button' id={`dislike-button-${post.id}`} onClick={() => handleInteraction(post.id, "dislike")}>Dislike</button>
                        </div>
                    </div>
                    
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