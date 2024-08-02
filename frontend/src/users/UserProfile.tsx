import React from "react";
import "./UserDetails.scss"
import "./../../public/styles.scss"
import { UserProfileProps } from "../models/user";

const UserProfile: React.FC<UserProfileProps> = (props: UserProfileProps) => {
    return (
        <div className="profileSession">
            <div className="imageParent">
                <img className="coverImage" src={props.coverImageUrl} alt="cover image" />
                <div className="profilePad"></div>
                <img className="profileImage" src={props.profileImageUrl} alt="profile image" />
                <div className="name">{props.name}</div>
                <div className="username">{props.username}</div>
                <div className="email">{props.email}</div>
            </div>
        </div>
    );

};

export default UserProfile;