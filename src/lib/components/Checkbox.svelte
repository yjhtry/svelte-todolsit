<script lang='ts'>
  import { idGenerator } from '$lib/utils/createUniqueId'

  interface CheckboxProps {
    label?: string
    value?: boolean
    layout?: 'horizontal' | 'vertical'
    [x: string]: any
  }

  let { label = '', value = $bindable(), layout = 'horizontal', ...restProps }: CheckboxProps = $props()

  const vertical = layout === 'vertical'
  const id = `checkbox-${idGenerator.next().value}`

</script>
<div class='w-full flex items-center' class:vertical>
  {#if label}
    <label class='mr-1' for={id}>{`${label}:`}</label>
  {/if}
  <input type='checkbox' id={id} {...restProps} bind:checked={value} />
</div>

<style>
  .vertical {
    flex-direction: column;
    align-items: start;
    margin-bottom: 0.25rem;
  }
</style>
