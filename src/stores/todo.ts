import { types } from "mobx-state-tree";

export const Todo = types
    .model("Todo", {
        id: types.optional(types.identifier, () => crypto.randomUUID()),
        text: types.string,
        isCompleted: types.optional(types.boolean, false)
    })
    .actions(self => ({
        setText(newText: string) {
            if (newText.trim() !== "") {
                self.text = newText.trim()
            }
        },
        toggleState() {
            self.isCompleted = !self.isCompleted
        }
    }))
