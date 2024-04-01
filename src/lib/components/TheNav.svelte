<script>
  const routes = [
    { name: 'Home', path: '/' },
    { name: 'todoList', path: '/todo' },
  ]

</script>
<div class='flex items-center border-b border-gray-300 border-solid px-6 py-3'>
  <div class='mr-auto'>Svelte TodoList</div>
  <ul class='flex gap-4'>
    {#each routes as route}
      <li>
        <a href={route.path}>{route.name}</a>
      </li>
    {/each}
  </ul>
</div>
