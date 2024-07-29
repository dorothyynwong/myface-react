import { useState, useEffect } from "react";
import moment from "moment";

interface UserPostModel {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: moment.Moment;
}

export interface UserModel {
    id: number;
    name: string;
    username: string;
    profileImageUrl: string;
    coverImageUrl: string;
    email: string;
    posts: UserPostModel[];
    likes: UserPostModel[];
    dislikes: UserPostModel[];
}

export const FetchUser = (userId: number) => {
  const [user, setUser] = useState<UserModel | null>(null);
  const userUrl = `http://localhost:3001/users/${userId.toString()}`;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(userUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        setUser(json);
        setIsLoading(false);  
      }) 
      .catch((error: Error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [userId]); 

  return {user, isLoading, error};

}
export default FetchUser;