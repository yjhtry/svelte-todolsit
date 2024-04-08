<script lang='ts'>
  import { todoStore } from '$lib/store/todo.svelte'
  import { page } from '$app/stores'
  import TodoForm from '$lib/components/TodoForm.svelte'

  const data = $derived.by(() => {
    const id = $page.params.id

    return todoStore.findOne(id)
  })

</script>

{#if data}
  <TodoForm row={data} isEdit={true} />
{:else}
  <p>Todo not found</p>
{/if}
