import React, { useState, useEffect } from "react";
import moment from "moment";
import PostsList from "./../posts/PostsList";
// import {PostModel} from '../../../src/models/api/postModel.ts';

// Define the type for your data

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


const Myfetch: React.FC = () => {
  const [data, setData] = useState<PostModel[] | null>(null);
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
        setData(results);
        setIsLoading(false);
        
      }) 
      // .then((data: PostModel[]) => {
      //   setData(data);
      //   setIsLoading(false);
      // })
      .catch((error: Error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  if (isLoading) {
    return (
      <div>
        Loading ....
      </div>
      
    )

  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    // No data yet
    return null;
  }

  console.log(data);

  // Render your component with data
  return (
    <div>
      {/* Render your data here */}
      check console.log for how the data is retreived  ...
      <PostsList posts={data}/>
    </div>
  );
};

export default Myfetch;