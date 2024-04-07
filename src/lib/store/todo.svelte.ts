export interface Todo {
  id: string
  title: string
  description: string
  done: boolean
}

function initTodos() {
  try {
    return JSON.parse(window.localStorage.getItem('todos') || '[]') || []
  }
  catch (error) {
    return []
  }
}

function createTodoStore() {
  let todos = $state<Todo[]>([])

  $effect.root(() => {
    $effect(() => {
      todos = initTodos()
    })

    $effect(() => {
      window.localStorage.setItem('todos', JSON.stringify(todos || []))
    })
  })

  return {
    get todos() { return todos },
    add: (todo: Todo) => todos.push(todo),
    update: (todo: Todo) => {
      const index = todos.findIndex(item => item.id === todo.id)
      todos.splice(index, 1, todo)
    },
    remove: (todo: Todo) => {
      const index = todos.findIndex(item => item.id === todo.id)
      todos.splice(index, 1)
    },
    clear: () => {
      todos = []
    },
  }
}

export const todoStore = createTodoStore()
