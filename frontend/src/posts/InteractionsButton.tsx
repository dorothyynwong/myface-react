import {PostModel} from './../data/fetchPosts.tsx';
import {handleInteraction} from "./../utils/interactionsUtils.ts"

export interface InteractionsProps {
    postId:number, 
    interaction: string,
    posts: PostModel[],
    setPosts: React.Dispatch<React.SetStateAction<PostModel[] | null>> 
}

export const InteractionsButtons: React.FC<InteractionsProps> = (props: InteractionsProps) => {
    
    const { postId, interaction, posts, setPosts } = props;
    const interactionLower = interaction.toLowerCase();

    return (
        <button 
            className = {`${interactionLower}-button`} 
            id={`${interactionLower}-button-${props.postId}`} 
            onClick={() => 
                handleInteraction(
                    postId, 
                    interactionLower, 
                    posts, 
                    setPosts)}>
            {props.interaction}
        </button>
    )
}