import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";

export const Landing = () => {
    const navigate = useNavigate();
    return <div className="flex justify-center">
        <div className="pt-8 max-w-screen-lg">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                <div className="flex justify-center">
                    <img src={"/chess_board.png"} className="max-w-96" alt="chess board" />
                </div>
                <div className="pt-16">
                    <div className="flex justify-center">
                    <h1 className="text-4xl font-bold text-white">Play Chess Online on the #2 Site!</h1>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <Button onClick={() =>{
                            navigate("/game")
                        }} >
                            Play Online
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}