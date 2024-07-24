// import {PostModel} from './../data/fetchPosts.tsx';
import React from "react";

interface UserDetailsProps {
    id: number;
    name: string;
    username: string;
    email: string;
    profileImageUrl: string;
    coverImageUrl: string;
}

const UserDetails: React.FC<UserDetailsProps> = (props: UserDetailsProps) => {
    return (
        <div>
            <img src={props.coverImageUrl} />
            <img src={props.profileImageUrl} />
            {props.id}
            {props.name}
            {props.username}
            {props.email}
        </div>
    );

};

export default UserDetails;