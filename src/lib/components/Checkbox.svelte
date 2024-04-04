<script lang='ts'>
  import { createEventDispatcher } from 'svelte'
  import { idGenerator } from '$lib/utils/createUniqueId'

  const id = `checkbox-${idGenerator.next().value}`

  export let label = ''
  export let value = false
  export let layout: 'horizontal' | 'vertical' = 'horizontal'

  const dispatch = createEventDispatcher<{ change: { value: boolean } }>()

  $: dispatch('change', { value })

  $: vertical = layout === 'vertical'

</script>
<div class='w-full flex items-center' class:vertical>
  {#if label}
    <label class='mr-1' for={id}>{`${label}:`}</label>
  {/if}
  <input type='checkbox' id={id} {...$$restProps} bind:checked={value} />
</div>

<style>
  .vertical {
    flex-direction: column;
    align-items: start;
    margin-bottom: 0.25rem;
  }
</style>
