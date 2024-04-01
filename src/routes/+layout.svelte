<script>
  import TheNav from '$lib/components/TheNav.svelte'
  import './styles.css'

</script>

<div class='app'>
  <main>
    <TheNav />
    <slot />
  </main>
</div>
