import { useTheme } from "@emotion/react";
import { ChangeEvent, useState } from "react";
import { Close, Edit, EditWhite, Trash } from "../assets";
import { useStore } from "../stores/context";
import { Button, Div, H5, H6, Img, Input, Line, Paragraph } from "../styles";

interface Props {
    id: string;
    text: string;
    isCompleted: boolean;
    completeTask(): void;
    removeTask(id: string): void;
    editTask(id: string, text: string): void;
}

function Card({ id, text, isCompleted, completeTask, removeTask, editTask }: Props) {

    const [task, setTask] = useState("");
    const [edit, setEdit] = useState(false);
    const theme = useTheme();
    const { darkTheme } = useStore();

    function getValue(event: ChangeEvent<HTMLInputElement>) {
        setTask(event.target.value);
    };

    function submit() {
        if (task.trim() !== "") {
            editTask(id, task)
            setTask("")
            setEdit(false)
        }
        else {
            alert("Please write text")
        }
    };

    function showEdit() {
        setEdit(true)
    };

    function closeEdit() {
        setEdit(false)
    };

    return (
        <>
            <Div height="80px" borderRadius="8px" display="flex">
                {edit ? (
                    <Div display="flex" align="center" height="100%">
                        <Input
                            border={`1px solid ${theme.blue}`}
                            borderRadius="8px 0 0 8px"
                            height="40px"
                            padding="0 8px"
                            placeholder="Write task..."
                            onChange={getValue}
                            value={task}
                        />
                        <Button
                            width="120px"
                            height="40px"
                            border="none"
                            borderRadius="0 8px 8px 0"
                            backgrondColor={theme.green}
                            onClick={submit}
                        >
                            <H5 cursor="pointer" fontSize="12px" fontWeight="700">
                                EDIT
                            </H5>
                        </Button>
                        <Button
                            width="55px"
                            height="40px"
                            border="none"
                            onClick={closeEdit}
                        >
                            <Img src={Close} width="30px" />
                        </Button>
                    </Div>
                ) : (
                    <>
                        <Div
                            width="80%"
                            padding="4px 8px"
                            height="90%"
                            overflowY="auto"
                            overflowX="hidden"
                        >
                            <Paragraph fontSize="12px" fontWeight="400" >
                                {text}
                            </Paragraph>
                        </Div>
                        <Line height="95%" width="0.01%" margin="auto 0" />
                        <Div
                            width="19%"
                            height="100%"
                            display="flex"
                            justify="space-between"
                            align="center"
                            padding="0 20px"
                        >
                            <Input
                                type="checkbox"
                                width="30%"
                                height="30%"
                                checked={isCompleted}
                                onChange={completeTask}
                            />
                            <Img
                                src={Trash}
                                width="20px"
                                height="25px"
                                cursor="pointer"
                                onClick={() => removeTask(id)}
                            />
                            <Img
                                src={darkTheme ? EditWhite : Edit}
                                width="26px"
                                height="28px"
                                cursor="pointer"
                                onClick={showEdit}
                            />
                        </Div>
                    </>
                )}
            </Div>
            <Line width="99%" margin="0 auto" />
        </>
    );
}

export default Card;