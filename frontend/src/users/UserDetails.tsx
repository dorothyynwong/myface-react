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
    const displayMenu = () => {
        let menuPad = document.getElementById("menuPad");
        if (menuPad) {
            const displayValue = menuPad.className;
            if (displayValue === "menuPadHidden")  menuPad.setAttribute("class","menuPadShow");
            else  menuPad.setAttribute("class","menuPadHidden");
        }
    }

    return (
        <div className='userDetails'>
                <nav>
                <button id="menuButton" className="hamburger" onClick={() => displayMenu()}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                </button>
                <div className="menuPadHidden" id="menuPad">
                    <a className="menuLink" href="/users/1">Home</a>
                    <a className="menuLink" href="/posts">Posts</a>
                    <a className="menuLink" href="/users">Users</a>
                </div>
                </nav>
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
        </div>
    );

};

export default UserDetails;