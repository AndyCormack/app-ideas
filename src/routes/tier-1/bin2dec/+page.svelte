<script lang="ts">
  import { bin2Dec } from './bin2dec'

  let binary = $state('')
  let answer = $state(0)
  let error = $state('')

  function onInputChanged(event: Event) {
    try {
      answer = bin2Dec(binary)
      error = ''
    } catch (e) {
      error = (e as Error).message
    }
  }
</script>

<div class="card card-bordered">
  <div class="card-body">
    <div class="card-title">Binary to Decimal</div>

    <label class="form-control">
      <div class="label">
        <span class="label-text">Enter binary</span>
      </div>

      <input
        type="text"
        placeholder="e.g. 10011101"
        class="input input-bordered w-full max-w-xs"
        maxlength="32"
        bind:value={binary}
        on:input={onInputChanged}
      />

      {#if error}
        <div>{error}</div>
      {/if}
    </label>

    <p>Result: {answer}</p>
  </div>
</div>
