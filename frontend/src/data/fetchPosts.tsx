import { useState, useEffect } from "react";
import moment from "moment";

interface PostUserModel {
    id: number;
    name: string;
    username: string;
    email: string;
}
export interface PostModel {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: moment.Moment;
    postedBy: PostUserModel;
    likedBy: PostUserModel[];
    dislikedBy: PostUserModel[];
}

export const FetchPosts = () => {
  const [posts, setPosts] = useState<PostModel[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3001/posts")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        const results = json.results;
        setPosts(results);
        setIsLoading(false);
        
      }) 
      .catch((error: Error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount
  
  return {posts, isLoading, error};
}

export default FetchPosts;