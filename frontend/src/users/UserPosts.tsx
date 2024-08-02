import React from "react";
import "./UserDetails.scss"
import "./../../public/styles.scss"
import {  UserPostsProps } from "../models/user";
import moment from "moment";

const UserPosts: React.FC<UserPostsProps> = (props: UserPostsProps) => {
    return (
        <div className="userPosts">
        {props.posts.map(post => (
            <div className="userSinglePost" key={post.id}>
                <img src={post.imageUrl} alt={post.id.toString()} />
                <div className="childText">
                    <div className="postedBy">{props.username}</div>
                    <div className="createdAt">{moment(post.createdAt).format("YYYY-MM-DD")}</div>
                    <p className="message">{post.message}</p>
                </div>
            </div>
        ))}
    </div>
    );

};

export default UserPosts;