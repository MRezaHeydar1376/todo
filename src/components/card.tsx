import { ChangeEvent } from "react";
import { Trash } from "../assets";
import { Div, Img, Input, Line, Paragraph } from "../styles";

interface Props {
    id: string;
    text: string;
    isCompleted: boolean;
    completeTask(): void;
    removeTask(id: string): void;
}

function Card({ id ,text, isCompleted, completeTask, removeTask }: Props) {

    return (
        <>
            <Div height="80px" borderRadius="8px" display="flex">
                <Div
                    width="80%"
                    padding="4px 8px"
                    overflowY="auto"
                    overflowX="hidden"
                >
                    <Paragraph fontSize="12px" fontWeight="400">
                        {text}
                    </Paragraph>
                </Div>
                <Line height="95%" width="0.01%" margin="auto 0" />
                <Div
                    width="19%"
                    height="100%"
                    display="flex"
                    justify="center"
                    align="center"
                >
                    <Input
                        type="checkbox"
                        width="30%"
                        height="30%"
                        checked={isCompleted}
                        onChange={completeTask}
                        margin="0 10px"
                    />
                    <Img
                        src={Trash}
                        width="20px"
                        height="25px"
                        cursor="pointer"
                        onClick={() => removeTask(id)}
                    />
                </Div>
            </Div>
            <Line width="99%" margin="0 auto" />
        </>
    );
}

export default Card;