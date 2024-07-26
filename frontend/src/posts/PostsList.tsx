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

    //     <div class="parent">
    //     <% postList.results.forEach(function(post) {%>
    //     <div class="child">                           
    //         <img src="<%= post.imageUrl %>" alt="image in the post <%= post.id %>"/>
    //         <div class="childText">
    //         <div class="postedBy"><%= post.postedBy.username %></div>
    //         <div class="createdAt"><%= format(post.createdAt, "yyyy-MM-dd") %> </div>
    //         <p class="message"><%= post.message %></p>   
    //         </div>
    //         <div class="LikeDislike">
    //             <div>
    //                 <div id="like-count-<%= post.id %>"><%=post.likedBy.length %></div> Likes
    //             </div>
    //             <div>
    //                 <div id="dislike-count-<%= post.id %>"><%=post.dislikedBy.length %></div> Dislikes
    //             </div>
    //         </div>
    //         <div class="buttonBox">
    //             <div>
    //                 <button id="like-button-<%= post.id%>">Like</button>
    //             </div>
    //             <div>
    //                 <button id="dislike-button-<%= post.id%>" type="submit">Dislike</button>
    //             </div>
    //         </div>
    //     </div>
    //     <% }); %>
    // </div>
        <div className='parent'>
            {props.posts.map(post => 
                (<div key={post.id} className="child">
                    <img src={post.imageUrl} alt={`image of ${post.id}`}/>
                    <div className="childText">
                        <div className="postedBy">{post.postedBy.username}</div>
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
                    
                    {/* <div className='likedby'>Liked By: {post.likedBy.map(user => (
                        <div className = "likelist" key={user.id}>{user.username} </div>
                    ))}</div> */}

                    {/* <div className='dislikedby'>Disliked By: {post.dislikedBy.map(user => (
                        <div className = "dislikelist" key={user.id}>{user.username} </div>
                    ))}</div> */}
               
                </div>)
            )}
        </div>
    );

};

export default PostsList;