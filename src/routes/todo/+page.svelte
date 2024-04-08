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
      dataIndex: 'description',
      title: 'Description',
    },
    {
      dataIndex: 'done',
      title: 'Done',
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
      <div class="space-x-3">
        <button class="text-blue" on:click={() => onDel(record as any)}>Del</button>
        <a href={`/todo/edit/${record.id}`} class="text-blue">Edit</a>
      </div>
    {/snippet}
  </Table>
</div>
