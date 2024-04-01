<script lang='ts'>
  import Input from '$lib/components/Input.svelte'
  import Textarea from '$lib/components/Textarea.svelte'
  import { type Todo } from '$lib/store/todo'

  const data = {} as Todo

</script>

<div class='m-auto mt-10 max-w-xl'>
  <Input
    layout='vertical'
    label='Title'
    class='w-full border border-gray-300 rounded px-2 py-2'
    bind:value={data.title} />
  <Textarea
    layout='vertical'
    label='Description'
    class='w-full border border-gray-300 rounded px-2 py-2'
    bind:value={data.description} />
</div>
