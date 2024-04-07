<script lang='ts'>
  import Input from '$lib/components/Input.svelte'
  import Textarea from '$lib/components/Textarea.svelte'
  import Checkbox from '$lib/components/Checkbox.svelte'
  import { type Todo, todoStore } from '$lib/store/todo.svelte'

  export let data: Omit<Todo, 'id'> = {} as any

  function onSubmit() {
    todoStore.add({ id: `${Date.now()}`, ...data })
  }

</script>

<div class='m-auto mt-10 max-w-xl space-y-4'>
  <Input
    layout='vertical'
    label='Title'
    class='w-full border border-gray-300 rounded px-2 py-2'
    bind:value={data.title}
  />
  <Textarea
    layout='vertical'
    label='Description'
    class='w-full border border-gray-300 rounded px-2 py-2'
    bind:value={data.description}
  />
  <Checkbox
    label='Description'
    class='border border-gray-300 rounded px-2 py-2'
    bind:value={data.done}
  />

  <div class='flex justify-end'>
    <button class='btn' on:click={onSubmit}>Submit</button>
  </div>
</div>
