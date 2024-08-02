
export interface InteractionsCounterProps {
    postId: number,
    interaction: string,
    count: number
}

export const InteractionsCounter: React.FC<InteractionsCounterProps> = (props: InteractionsCounterProps) => {

    const { postId, interaction, count} = props;
    const interactionLower = interaction.toLowerCase();

    return (
        <>
            <div>
                <div id={`${interactionLower}-count-${postId}`}>{count}</div> {interaction}
            </div>

        </>
    )
}