import {FetchPosts} from './../data/fetchPosts.tsx';
import React from "react";
import "./PostsList.scss"
import moment from 'moment';


export const PostsList: React.FC = () => {
    const {posts, isLoading, error} = FetchPosts();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


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
        <div className='parent'>
            {posts?.map(post => 
                (<div key={post.id} className="child">
                    <img src={post.imageUrl} alt={`image of ${post.id}`}/>
                    <div className="childText">
                        <div className="postedBy">{post.postedBy.username}</div>
                        <div className="createdAt">{moment(post.createdAt).format("YYYY-MM-DD")} </div>
                        <p className="message">{post.message}</p>   
                    </div>

                    <div className="LikeDislike">
                        <div>
                            <div id={`like-count-${post.id}`}>{post.likedBy.length}</div> Likes
                        </div>
                        <div>
                            <div id={`dislike-count-${post.id}`}>{post.dislikedBy.length}</div> Dislikes
                        </div>
                    </div>

                    <div className="buttonBox">
                        <div>
                            <button className = 'like-button' id={`like-button-${post.id}`} onClick={() => handleInteraction(post.id, "like")}>Like</button>

                            <button className= 'dislike-button' id={`dislike-button-${post.id}`} onClick={() => handleInteraction(post.id, "dislike")}>Dislike</button>
                        </div>
                    </div>
                </div>)
            )}
        </div>
    );

};

export default PostsList;