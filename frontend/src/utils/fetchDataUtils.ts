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

export enum DataType {
    UserModel
  }
export default async function fetchData(url:string, type:  DataType): Promise<UserModel> {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

    const data = await response.json();
    
    if (type === DataType.UserModel) {
      return data as UserModel
    } else {
      throw new Error("Unknown data type");
    }
  } catch (error) {
    console.error("Fetch data error:", error);
    throw error;
  }
}