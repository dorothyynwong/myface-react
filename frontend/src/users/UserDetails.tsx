import React, { useState, useEffect } from "react";
import "./UserDetails.scss"
import "./../../public/styles.scss"
import { useParams } from 'react-router-dom';
import { DataType } from "../models/common.ts";
import { UserModel, UserProfileProps } from "../models/user.ts";
import fetchData from "../utils/fetchDataUtils.ts";
import UserProfile from "./UserProfile.tsx";
import UserPosts from "./UserPosts.tsx";

const UserDetails: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    // const { user, isLoading, error } = FetchUser(Number(userId));
    const userUrl = `http://localhost:3001/users/${userId?.toString()}`;
    const [user, setUser] = useState<UserModel | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                setIsLoading(true);
                const userData = await fetchData(userUrl, DataType.UserModel) as UserModel;
                setUser(userData);
                setIsLoading(false);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error);
                    setIsLoading(false);
                }
            }
        };

        fetchUserDetails();
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    let userProfileProps: UserProfileProps = {
        name: '',
        username: '',
        profileImageUrl: '',
        coverImageUrl: '',
        email: ''
    };

    if (user) {
        userProfileProps = {
            name: user.name,
            username: user.username,
            profileImageUrl: user.profileImageUrl,
            coverImageUrl: user.coverImageUrl,
            email: user.email
        };
    }
        
    const splitName = user ? user.name.split(' ')[0] : '';

    return (
        <div className='userDetails'>
            {user && <UserProfile {...userProfileProps} />}
            <div className="postsSession">
                <h1>{splitName}'s Posts</h1>
                {user && (
                    <UserPosts
                        username={user.username}
                        posts={user.posts}
                    />
                )}
                <h1>Liked</h1>
                {user && (
                    <UserPosts
                        username={user.username}
                        posts={user.likes}
                    />
                )}
                <h1>Disliked</h1>
                {user && (
                    <UserPosts
                        username={user.username}
                        posts={user.dislikes}
                    />
                )}
            </div>
        </div>
    );

};

export default UserDetails;