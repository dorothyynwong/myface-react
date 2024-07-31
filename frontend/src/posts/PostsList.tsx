// import {FetchPosts} from './../data/fetchPosts.tsx';
import React, { useEffect, useState } from "react";
import "./PostsList.scss"
import moment from 'moment';
import { InteractionsButtons } from './InteractionsButton.tsx';
import fetchData, { DataType, PostModel } from './../utils/fetchDataUtils.ts';

export const PostsList: React.FC = () => {
    // const {posts: initialPosts, isLoading, error} = FetchPosts();
    // const [posts, setPosts] = useState(initialPosts);
    const postsUrl = "http://localhost:3001/posts";
    const [posts, setPosts] = useState<PostModel[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    // useEffect(() => {
    //     setPosts(initialPosts);
    // }, [initialPosts]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postData = await fetchData(postsUrl, DataType.Posts) as PostModel[];
                setPosts(postData);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error);
                    setIsLoading(false);
                }
            }
        };

        fetchPosts();
        setIsLoading(false);
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='parent'>

            {posts?.map(post =>
            (<div key={post.id} className="child">
                <img src={post.imageUrl} alt={`image of ${post.id}`} />
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
                        <InteractionsButtons
                            postId={post.id}
                            interaction="Like"
                            posts={posts}
                            setPosts={setPosts}
                        />
                        <InteractionsButtons
                            postId={post.id}
                            interaction="Dislike"
                            posts={posts}
                            setPosts={setPosts}
                        />
                    </div>
                </div>
            </div>)
            )}
        </div>
    );

};

export default PostsList;