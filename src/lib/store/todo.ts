import { writable } from 'svelte/store'

export interface Todo {
  id: string
  title: string
  description: string
  done: boolean
}

function createTodoStore() {
  const { subscribe, set, update } = writable<Todo[]>([{ id: '1', title: 'Hello', description: 'World', done: false }])

  return {
    subscribe,
    add: (todo: Todo) => update(todos => [...todos, todo]),
    update: (todo: Todo) => update(todos => todos.map(t => (t.id === todo.id ? todo : t))),
    remove: (todo: Todo) => update(todos => todos.filter(t => t !== todo)),
    clear: () => set([]),
  }
}

export const todoStore = createTodoStore()
