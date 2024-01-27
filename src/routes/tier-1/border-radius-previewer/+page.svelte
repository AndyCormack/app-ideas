<script lang="ts">
  let amount = $state(20)
  let unit = $state('px')
  let borderRadius = $derived(`${amount}${unit}`)
</script>

<div class="text-xl">Border-radius Previewer</div>

<div class="card bg-emerald-500 m-8" style:border-radius={borderRadius}>
  <div class="card-body">
    <label class="form-control">
      <div class="label">
        <span class="label-text">Border Radius</span>
      </div>

      <div>
        <input class="input" type="number" bind:value={amount} />

        <select class="select" bind:value={unit}>
          <option value="px">px</option>
          <option value="%">%</option>
        </select>
      </div>
    </label>
  </div>
</div>
