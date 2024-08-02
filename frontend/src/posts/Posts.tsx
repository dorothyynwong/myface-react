import React from "react";
import "./../../public/styles.scss"
import moment from "moment";
import { PostModel } from "../models/post";


const Post: React.FC<PostModel> = (props: PostModel) => {
    const {id, message, imageUrl, createdAt, postedBy} = props;

    return (
        <>
        <img src={imageUrl} alt={`image of ${id}`} />
        <div className="childText">
            <div className="postedBy">{postedBy.username}</div>
            <div className="createdAt">{moment(createdAt).format("YYYY-MM-DD")} </div>
            <p className="message">{message}</p>
        </div>
        </>
    );

};

export default Post;