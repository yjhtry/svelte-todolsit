<script lang='ts'>
  import { type Todo, todoStore } from '$lib/store/todo.svelte'
  import Table, { type Column } from '$lib/components/Table.svelte'

  function onDel(record: Todo) {
    todoStore.remove(record)
  }

  const columns = [
    {
      dataIndex: 'id',
      title: 'ID',
    },
    {
      dataIndex: 'title',
      title: 'Title',
    },
    {
      dataIndex: 'completed',
      title: 'Completed',
    },
    {
      dataIndex: 'operation',
      title: 'Operation',
      slot: 'operation'
    },
  ] as Column<Todo>[]


</script>

<div class='p-6'>
  <div class='mb-4 flex justify-end'>
    <a href='/todo/add' class='btn'>Add</a>
  </div>
  <Table dataSource={todoStore.todos} columns={columns as any}>
    {#snippet operation(record: any)}
      <button class="text-blue" on:click={() => onDel(record as any)}>Del</button>
    {/snippet}
  </Table>
</div>
