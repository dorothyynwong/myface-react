export interface UserPostModel {
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

  export interface UserProfileProps{
    name: string;
    username: string;
    profileImageUrl: string;
    coverImageUrl: string;
    email: string
}

export interface UserPostsProps {
    username: string;
    posts: UserPostModel[];
}