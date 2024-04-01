<script context='module' lang='ts'>
  export interface Column<T> {
    dataIndex: keyof T
    title: string
    render?: (value: any, record: T, index: number) => any
  }

</script>

<script lang='ts' generics='T extends object'>
  interface Column<T> {
    dataIndex: keyof T
    title: string
    render?: (value: any, record: T, index: number) => any
  }

  export let title: string = ''
  export let dataSource: T[] = []
  export let columns: Column<T>[] = []

  const headers = columns.map(column => column.title)
</script>

<section class='bg-gray-100 text-gray-600 antialiased'>
  <div class='h-full flex flex-col justify-center'>
    <div class='w-full border border-gray-200 rounded-sm bg-white shadow-lg'>
      {#if title}
        <header class='border-b border-gray-100 px-5 py-4'>
          <h2 class='text-gray-800 font-semibold'>{title}</h2>
        </header>
      {/if}
      <div class='p-3'>
        <div class='overflow-x-auto'>
          <table class='w-full table-auto'>
            <thead class='bg-gray-50 text-xs text-gray-400 font-semibold'>
              <tr>
                {#each headers as header}
                  <th class='whitespace-nowrap p-2'>
                    <div class='text-left font-semibold'>{header}</div>
                  </th>
                {/each}
              </tr>
            </thead>
            <tbody class='text-sm divide-y divide-gray-100'>
              {#each dataSource as record, index}
                <tr>
                  {#each columns as column}
                    <td class='whitespace-nowrap p-2'>
                      <div class='flex items-center'>
                        <div class='text-gray-800 font-medium'>
                          {column.render
                            ? column.render(
                              record[column.dataIndex],
                              record,
                              index,
                            )
                            : column.dataIndex}
                        </div>
                      </div>
                    </td>
                  {/each}
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
