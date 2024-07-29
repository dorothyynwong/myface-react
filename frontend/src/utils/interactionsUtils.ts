import { PostModel } from "../data/fetchPosts";

export const handleInteraction = async (
        postId:number, 
        interaction: string,
        posts: PostModel[],
        setPosts: React.Dispatch<React.SetStateAction<PostModel[]>>
    ) => {
    const actionUrl = `http://localhost:3001/posts/${postId}/${interaction}/`;
    try {
        const response = await fetch(actionUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            const data =  await response.json();
            if(posts) {
                const updatedPosts = posts.map(post =>  
                    post.id === postId ? { ...post, likedBy:data.newLikedBy, dislikedBy:data.newDislikedBy } : post   
                );
                setPosts(updatedPosts);
            }

        }
    } catch (error) {
        console.error('Error:', error);
    }
}