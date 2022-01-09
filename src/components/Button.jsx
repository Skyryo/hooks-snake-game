import react from "react";

const Button = ({ status, onStart, onStop, onRestart }) => {
    return (
        <div className="button">
            { status ==="gameover" && <button className="btn btn-gameover" onClick={onRestart}>GameOver</button> }
            { status ==="init" && <button className="btn btn-init" onClick={onStart}>Start!!</button> }
            { status ==="suspended" && <button className="btn btn-suspended" onClick={onStart}>Start!!</button> }
            { status ==="playing" && <button className="btn btn-playing" onClick={onStop}>Stop</button> }
        </div>
    );
};

export default Button;