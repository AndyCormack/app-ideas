module.exports = {
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  printWidth: 80,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
}
