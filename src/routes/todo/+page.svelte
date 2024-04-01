<script lang='ts'>
  import { type Todo, todoStore } from '$lib/store/todo'
  import Table, { type Column } from '$lib/components/Table.svelte'

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
      render: (value: boolean) => (value ? 'Yes' : 'No'),
    },
  ] as Column<Todo>[]
</script>

<div class='p-6'>
  <div class='mb-4 flex justify-end'>
    <a href='/todo/add' class='btn'>Add</a>
  </div>
  <Table bind:dataSource={$todoStore} columns={columns} />
</div>
