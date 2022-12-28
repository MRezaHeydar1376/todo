import { observer } from "mobx-react-lite";
import { ChangeEvent, useState } from "react";
import { BackgroundDark, BackgroundLight } from "../assets";
import { Card, SideCard, SwitchButton } from "../components";
import { useStore } from "../stores/context";
import { Button, Div, H5, Img, Input } from "../styles";
import { Color } from "../variables";

function Home() {
    const store = useStore();
    const [task, setTask] = useState("");

    function getValue(event: ChangeEvent<HTMLInputElement>) {
        setTask(event.target.value)
    };

    function submit() {
        if (task.trim() !== "") {
            store.addTodo(task);
            setTask("")
        }
        else {
            alert("Please write text")
        }
    };

    function compeletTask() {
    };

    return (
        <Div position="relative" height="100vh">
            <Img src={BackgroundLight} height="100%" position="absolute" top="0px" left="0px" />
            <SideCard />
            <Div position="relative" width="50%" margin="0 auto" display="flex">
                <Input
                    border={`1px solid ${Color.blue}`}
                    borderRadius="8px 0 0 8px"
                    height="40px"
                    padding="0 8px"
                    placeholder="Write task..."
                    onChange={getValue}
                    value={task}
                />
                <Button
                    width="100px"
                    height="40px"
                    border="none"
                    borderRadius="0 8px 8px 0"
                    backgrondColor={Color.green}
                    onClick={submit}
                >
                    <H5 cursor="pointer" fontSize="15px" fontWeight="700">
                        ADD
                    </H5>
                </Button>
            </Div>
            <Div
                position="relative"
                width="50%"
                height="350px"
                margin="20px auto"
                border={`1px solid ${Color.blue}`}
                borderRadius="8px"
                backgroundColor={Color.white}
                overflowY="auto"
                overflowX="hidden"
            >
                {store.todos.map(todo => (
                    <Card 
                        text={todo.text}
                        isCompleted={todo.isCompleted} 
                        completeTask={todo.toggleState}                    
                    />
                ))}
            </Div>
        </Div>
    );
}

export default observer(Home);