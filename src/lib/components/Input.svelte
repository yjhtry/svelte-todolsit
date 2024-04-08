<script lang='ts'>
  import { idGenerator } from '$lib/utils/createUniqueId'

  interface InputProps {
    label?: string
    value?: string
    layout?: 'horizontal' | 'vertical'
    [x: string]: any
  }

  let { label = '', value = $bindable(), layout = 'horizontal', ...restProps }: InputProps = $props()

  const id = `input-${idGenerator.next().value}`
  const vertical = layout === 'vertical'

</script>
<div class='w-full flex items-center' class:vertical>
  {#if label}
    <label class='mr-1' for={id}>{`${label}:`}</label>
  {/if}
  <input id={id} {...restProps} bind:value={value} />
</div>

<style>
  .vertical {
    flex-direction: column;
    align-items: start;
    margin-bottom: 0.25rem;
  }
</style>
