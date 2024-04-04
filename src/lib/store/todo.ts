import { writable } from 'svelte/store'

export interface Todo {
  id: string
  title: string
  description: string
  done: boolean
}

function initTodos() {
  if (typeof window !== 'undefined') {
    try {
      return JSON.parse(window.localStorage.getItem('todos') || '[]') || []
    }
    catch (error) {
      return []
    }
  }

  return []
}

function createTodoStore() {
  const { subscribe, set, update } = writable<Todo[]>(initTodos())

  subscribe((todos) => {
    if (typeof window !== 'undefined')
      window.localStorage.setItem('todos', JSON.stringify(todos || []))
  })

  return {
    subscribe,
    add: (todo: Todo) => update(todos => [...todos, todo]),
    update: (todo: Todo) => update(todos => todos.map(t => (t.id === todo.id ? todo : t))),
    remove: (todo: Todo) => update(todos => todos.filter(t => t !== todo)),
    clear: () => set([]),
  }
}

export const todoStore = createTodoStore()
