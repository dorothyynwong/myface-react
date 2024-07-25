// import {PostModel} from './../data/fetchPosts.tsx';
import {UserModel} from './../data/fetchUserDetails.tsx';
import React from "react";
import "./UserDetails.scss"
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

    return (
        <div className='container'>
            <img className="coverImage" src={props.userDetails.coverImageUrl} />
            <img className="profileImage" src={props.userDetails.profileImageUrl} />
            {props.userDetails.id}
            {props.userDetails.name}
            {props.userDetails.username}
            {props.userDetails.email}
        </div>
    );

};

export default UserDetails;