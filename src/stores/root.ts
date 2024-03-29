import { types, Instance } from 'mobx-state-tree';
import { Todo } from './todo';

export const RootStore = types
    .model("Root", ({
        todos: types.optional(types.array(Todo), []),
        darkTheme: false
    }))
    .actions(self => ({
        addTodo(text: string) {
            const newTodo = Todo.create({
                text,
            })
            self.todos.push(newTodo)
        },
        removeTodo(id: string) {
            const matchedTodo = self.todos.find(todo => todo.id === id)
            if (matchedTodo) (
                self.todos.remove(matchedTodo)
            )
        },
        editTodo(id: string, newText: string) {
            const matchedTodo = self.todos.find(todo => todo.id === id)
            if (matchedTodo) (
                matchedTodo.setText(newText)
            )
        },
        clearAll() {
            self.todos.clear()
        },
        toggleTheme() {
            self.darkTheme = !self.darkTheme
        }
    }))
    .views(self => ({
        get openTodos() {
            return self.todos.filter(todo => !todo.isCompleted)
        },
        get doneTodos() {
            return self.todos.filter(todo => todo.isCompleted)
        }
    }))

export type RootStoreType = Instance<typeof RootStore>