// import {FetchPosts} from './../data/fetchPosts.tsx';
import React, { useEffect, useState } from "react";
import "./PostsList.scss"
import moment from 'moment';
import { InteractionsButtons } from '../interactions/InteractionsButton.tsx';
import { DataType } from "../models/common.ts";
import { PostModel } from "../models/post.ts";
import fetchData from "../utils/fetchDataUtils.ts";
import { InteractionsCounter } from "../interactions/InteractionsCounter.tsx";

export const PostsList: React.FC = () => {
    const postsUrl = "http://localhost:3001/posts";
    const [posts, setPosts] = useState<PostModel[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setIsLoading(true);
                const postData = await fetchData(postsUrl, DataType.Posts) as PostModel[];
                setPosts(postData);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error);
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

                <div className="interaction-count-box">
                    <InteractionsCounter
                        postId={post.id}
                        interaction="Like"
                        count={post.likedBy.length}
                    />
                    <InteractionsCounter
                        postId={post.id}
                        interaction="Dislike"
                        count={post.likedBy.length}
                    />
                </div>

                <div className="buttonBox">
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
            </div>)
            )}
        </div>
    );

};

export default PostsList;