// import {PostModel} from './../data/fetchPosts.tsx';
import {UserModel} from './../data/fetchUserDetails.tsx';
import React from "react";

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
    return (
        <div>
            <img src={props.userDetails.coverImageUrl} />
            <img src={props.userDetails.profileImageUrl} />
            {props.userDetails.id}
            {props.userDetails.name}
            {props.userDetails.username}
            {props.userDetails.email}
        </div>
    );

};

export default UserDetails;