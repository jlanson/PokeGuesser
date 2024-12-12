import "./GameModeButton.css"

interface GameButtonProps{
    imgSrc?: string;
    text: string;
}

export default function GameButton(props: GameButtonProps){
    const {imgSrc, text} = props;

    return (
        <button className="game-button">
            <img src="" alt="" />
            <span>{text}</span>
        </button>
    )
}