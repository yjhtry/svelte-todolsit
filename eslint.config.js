import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  svelte: true,
  formatters: true,
}, {
  rules: {
    'svelte/valid-compile': 'off',
  },
})
