<script lang="ts">
  import { flyDefault } from '$/lib/transitions'
  import { bin2Dec } from './bin2dec'

  let binary = $state('')
  let result = $state(0)
  let error = $state('')

  function onInputChanged(event: Event) {
    try {
      result = bin2Dec(binary)
      error = ''
    } catch (e) {
      error = (e as Error).message
    }
  }
</script>

<div class="text-xl">Binary to Decimal</div>

<label class="form-control gap-2 w-full max-w-xs">
  <div class="label">
    <span class="label-text">Enter binary</span>
  </div>

  <input
    type="text"
    placeholder="e.g. 10011101"
    class="input input-bordered"
    maxlength="32"
    bind:value={binary}
    on:input={onInputChanged}
  />

  {#if error}
    <div
      in:flyDefault
      out:flyDefault
      class="alert p-1 rounded-sm alert-error text-white"
    >
      {error}
    </div>
  {/if}
</label>

{#if binary && !error}
  <p>Result: {result}</p>
{/if}
