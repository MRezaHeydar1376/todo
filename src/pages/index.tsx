import { useTheme } from "@emotion/react";
import { observer } from "mobx-react-lite";
import { ChangeEvent, useState } from "react";
import { BackgroundDark, BackgroundLight } from "../assets";
import { Card, SideCard } from "../components";
import { useStore } from "../stores/context";
import { Button, Div, H5, Img, Input } from "../styles";

function Home() {
    const store = useStore();
    const [task, setTask] = useState("");
    const theme = useTheme();

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

    function removeTask(id: string) {
        store.removeTodo(id)
    };

    function editTask(id: string, text: string) {
        store.editTodo(id, text)
    };

    function clearAll() {
        store.clearAll()
    };

    return (
        <Div position="relative" height="100vh">
            <Img src={store.darkTheme ?  BackgroundDark : BackgroundLight} height="100%" position="absolute" top="0px" left="0px" />
            <SideCard />
            <Div position="relative" width="50%" margin="0 auto" display="flex">
                <Input
                    border="1px solid transparent"
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
                    backgroundColor={theme.green}
                    onClick={submit}
                >
                    <H5 cursor="pointer" fontSize="12px" fontWeight="700">
                        ADD
                    </H5>
                </Button>
                <Button
                    width="120px"
                    height="40px"
                    border="none"
                    borderRadius="0 8px 8px 0"
                    backgroundColor={theme.red}
                    onClick={clearAll}
                >
                    <H5 cursor="pointer" fontSize="12px" fontWeight="700">
                        CLEAR ALL
                    </H5>
                </Button>
            </Div>
            <Div
                position="relative"
                width="50%"
                height="350px"
                margin="20px auto"
                border="1px solid transparent"
                borderRadius="8px"
                backgroundColor={theme.black}
                overflowY="auto"
                overflowX="hidden"
            >
                {store.todos.map(todo => (
                    <Div key={todo.id}>
                        <Card
                            id={todo.id}
                            text={todo.text}
                            removeTask={removeTask}
                            editTask={editTask}
                        />
                    </Div>
                ))}
            </Div>
        </Div>
    );
}

export default observer(Home);