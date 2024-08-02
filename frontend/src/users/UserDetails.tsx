import {FetchUser} from './../data/fetchUserDetails.tsx';
import React from "react";
import "./UserDetails.scss"
import "./../../public/styles.scss"
import { useParams } from 'react-router-dom';
import moment from 'moment';

const UserDetails: React.FC = () => {
    const {userId} = useParams<{userId: string}> ();
    const { user, isLoading, error } = FetchUser(Number(userId));

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const splitName = user?.name.split(' ')[0];


    return (
        <div className='userDetails'>
            <div className="profileSession">
                <div className="imageParent">
                    <img className="coverImage" src={user?.coverImageUrl} alt="cover image"/>
                    <div className="profilePad"></div>
                    <img className="profileImage" src={user?.profileImageUrl} alt="profile image"/>
                    <div className="name">{user?.name}</div>
                    <div className="username">{user?.username}</div>
                    <div className="email">{user?.email}</div>
                </div>
            </div>
            <div className="postsSession">
                <h1>{splitName}'s Posts</h1>
                <div className="userPosts">
                    {user?.posts.map(post => (
                        <div className="userSinglePost" key={post.id}>
                            <img src={post.imageUrl} alt={post.id.toString()}/>
                            <div className="childText">
                                <div className="postedBy">{user?.username}</div>
                                <div className="createdAt">{moment(post.createdAt).format("YYYY-MM-DD")}</div> 
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