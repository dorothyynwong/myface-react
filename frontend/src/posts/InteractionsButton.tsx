import { PostModel } from "../models/post";

export interface InteractionsProps {
    postId: number,
    interaction: string,
    posts: PostModel[],
    setPosts: React.Dispatch<React.SetStateAction<PostModel[] | null>>
}

export const InteractionsButtons: React.FC<InteractionsProps> = (props: InteractionsProps) => {

    const { postId, interaction, posts, setPosts } = props;
    const interactionLower = interaction.toLowerCase();

    const handleInteraction = async () => {
        const actionUrl = `http://localhost:3001/posts/${postId}/${interaction}/`;
        try {
            const response = await fetch(actionUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                if (posts) {
                    const updatedPosts = posts.map(post =>
                        post.id === postId ? { ...post, likedBy: data.newLikedBy, dislikedBy: data.newDislikedBy } : post
                    );
                    setPosts(updatedPosts);
                }

            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <button
            className={`${interactionLower}-button`}
            id={`${interactionLower}-button-${props.postId}`} onClick={handleInteraction}>
            {props.interaction}
        </button>
    )
}