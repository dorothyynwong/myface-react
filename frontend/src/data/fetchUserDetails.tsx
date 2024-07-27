import React, { useState, useEffect } from "react";
import moment from "moment";
import UserDetails from "./../users/UserDetails";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
// import {PostModel} from '../../../src/models/api/postModel.ts';

// Define the type for your data

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
  }, [userId]); // Empty dependency array means this effect will only run once, similar to componentDidMount

  return {user, isLoading, error};

}
// const FetchUser: React.FC = () => {
//     const {userId} = useParams<{ userId: string }>();
//   const [data, setData] = useState<UserModel | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<Error | null>(null);
// // const userId = userIdProps  ;
// const userUrl = `http://localhost:3001/users/${userId}`
// console.log(userUrl)

//   useEffect(() => {
//     setIsLoading(true);
//     fetch(userUrl)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(json => {
//         // const results = json.results;
//         // setData(results);
//         setData(json);
//         setIsLoading(false);
        
//       }) 
//       // .then((data: PostModel[]) => {
//       //   setData(data);
//       //   setIsLoading(false);
//       // })
//       .catch((error: Error) => {
//         setError(error);
//         setIsLoading(false);
//       });
//   }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

//   if (isLoading) {
//     return (
//       <div>
//         Loading ....
//       </div>
      
//     )

//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (!data) {
//     // No data yet
//     return null;
//   }

//   console.log(data);

//   // Render your component with data
//   return (
//     <>
//       <UserDetails userDetails={data}/>
//     </>
//   );
// };

export default FetchUser;