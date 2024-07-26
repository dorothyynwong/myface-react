// import {PostModel} from './../data/fetchPosts.tsx';
import {UserModel} from './../data/fetchUserDetails.tsx';
import React from "react";
import "./UserDetails.scss"
import "./../../public/styles.scss"
// import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';

interface UserDetailsProps {
    // id: number;
    // name: string;
    // username: string;
    // email: string;
    // profileImageUrl: string;
    // coverImageUrl: string;
    userDetails: UserModel;
}

const UserDetails: React.FC<UserDetailsProps> = (props: UserDetailsProps) => {
    // const UserDetails: React.FC = () => {
    const splitName = props.userDetails.name.split(' ')[0];

    return (
        <div className='userDetails'>
            <div className="profileSession">
                <div className="imageParent">
                    <img className="coverImage" src={props.userDetails.coverImageUrl} alt="cover image"/>
                    <div className="profilePad"></div>
                    <img className="profileImage" src={props.userDetails.profileImageUrl} alt="profile image"/>
                    <div className="name">{props.userDetails.name}</div>
                    <div className="username">{props.userDetails.username}</div>
                    <div className="email">{props.userDetails.email}</div>
                </div>
            </div>
            <div className="postsSession">
                <h1>{splitName}'s Posts</h1>
                <div className="userPosts">
                    {props.userDetails.posts.map(post => (
                        <div className="userSinglePost" key={post.id}>
                            <img src={post.imageUrl} alt={post.id.toString()}/>
                            <div className="childText">
                                <div className="postedBy">{props.userDetails.username}</div>
                                {/* <div className="createdAt">{post.createdAt.format("YYYY-MM-DD")}</div> */}
                                <p className="message">{post.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <img className="coverImage" src={props.userDetails.coverImageUrl} />
            <img className="profileImage" src={props.userDetails.profileImageUrl} />
            {props.userDetails.id}
            {props.userDetails.name}
            {props.userDetails.username}
            {props.userDetails.email} */}
        </div>
    );

};

export default UserDetails;