<script lang="ts">
  let topLeft = $state({
    width: 10,
    height: 20,
    widthUnit: 'px',
    heightUnit: 'px',
  })
  let topLeftCss = $derived(
    `${topLeft.width}${topLeft.widthUnit} ${topLeft.height}${topLeft.heightUnit}`
  )

  let topRight = $state({
    width: 30,
    height: 40,
    widthUnit: 'px',
    heightUnit: 'px',
  })
  let topRightCss = $derived(
    `${topRight.width}${topRight.widthUnit} ${topRight.height}${topRight.heightUnit}`
  )

  let bottomLeft = $state({
    width: 50,
    height: 60,
    widthUnit: 'px',
    heightUnit: 'px',
  })
  let bottomLeftCss = $derived(
    `${bottomLeft.width}${bottomLeft.widthUnit} ${bottomLeft.height}${bottomLeft.heightUnit}`
  )

  let bottomRight = $state({
    width: 70,
    height: 80,
    widthUnit: 'px',
    heightUnit: 'px',
  })
  let bottomRightCss = $derived(
    `${bottomRight.width}${bottomRight.widthUnit} ${bottomRight.height}${bottomRight.heightUnit}`
  )
</script>

<div class="text-xl">Border-radius Previewer</div>

<div
  class="card bg-secondary-content m-8"
  style:border-top-left-radius={topLeftCss}
  style:border-top-right-radius={topRightCss}
  style:border-bottom-left-radius={bottomLeftCss}
  style:border-bottom-right-radius={bottomRightCss}
>
  <div class="card-body grid grid-rows-3 grid-cols-2">
    <!-- Top Left -->
    <div>
      <div>
        <input
          type="range"
          bind:value={topLeft.width}
          min="0"
          max="100"
          class="inline-flex w-20 ml-6"
        />

        <div class="inline-flex flex-row gap-1">
          <span>{topLeft.width}</span>

          <select class="select select-xs" bind:value={topLeft.widthUnit}>
            <option value="px">px</option>
            <option value="%">%</option>
          </select>
        </div>
      </div>

      <div class="inline-flex flex-col items-start gap-2">
        <input
          type="range"
          bind:value={topLeft.height}
          min="0"
          max="100"
          class="vertical w-6 h-20"
        />

        <div class="flex flex-row gap-1">
          <span>{topLeft.height}</span>

          <select class="select select-xs" bind:value={topLeft.heightUnit}>
            <option value="px">px</option>
            <option value="%">%</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Top Right -->
    <div class="flex flex-col items-end">
      <div class="flex flex-row-reverse">
        <input
          type="range"
          bind:value={topRight.width}
          min="0"
          max="100"
          class="inline-flex w-20 mr-6"
        />

        <div class="inline-flex flex-row gap-1 items-end">
          <span>{topRight.width}</span>

          <select class="select select-xs" bind:value={topRight.widthUnit}>
            <option value="px">px</option>
            <option value="%">%</option>
          </select>
        </div>
      </div>

      <div class="inline-flex flex-col items-end gap-2">
        <input
          type="range"
          bind:value={topRight.height}
          min="0"
          max="100"
          class="vertical w-6 h-20"
        />

        <div class="flex flex-row gap-1">
          <span>{topRight.height}</span>

          <select class="select select-xs" bind:value={topRight.heightUnit}>
            <option value="px">px</option>
            <option value="%">%</option>
          </select>
        </div>
      </div>
    </div>

    <div class="col-span-2 flex items-center justify-center">Border Radius</div>

    <!-- Bottom Left -->
    <div>
      <div class="inline-flex flex-col items-start gap-2">
        <div class="flex flex-row gap-1">
          <span>{bottomLeft.height}</span>

          <select class="select select-xs" bind:value={bottomLeft.heightUnit}>
            <option value="px">px</option>
            <option value="%">%</option>
          </select>
        </div>

        <input
          type="range"
          bind:value={bottomLeft.height}
          min="0"
          max="100"
          class="vertical w-6 h-20"
        />
      </div>

      <div>
        <input
          type="range"
          bind:value={bottomLeft.width}
          min="0"
          max="100"
          class="inline-flex w-20 ml-6"
        />

        <div class="inline-flex flex-row gap-1">
          <span>{bottomLeft.width}</span>

          <select class="select select-xs" bind:value={bottomLeft.widthUnit}>
            <option value="px">px</option>
            <option value="%">%</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Bottom Right -->
    <div class="flex flex-col items-end">
      <div class="inline-flex flex-col items-end gap-2">
        <div class="flex flex-row gap-1">
          <span>{bottomRight.height}</span>

          <select class="select select-xs" bind:value={bottomRight.heightUnit}>
            <option value="px">px</option>
            <option value="%">%</option>
          </select>
        </div>

        <input
          type="range"
          bind:value={bottomRight.height}
          min="0"
          max="100"
          class="vertical w-6 h-20"
        />
      </div>

      <div class="flex flex-row-reverse">
        <input
          type="range"
          bind:value={bottomRight.width}
          min="0"
          max="100"
          class="inline-flex w-20 mr-6"
        />

        <div class="inline-flex flex-row gap-1 items-end">
          <span>{bottomRight.width}</span>

          <select class="select select-xs" bind:value={bottomRight.widthUnit}>
            <option value="px">px</option>
            <option value="%">%</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .vertical {
    appearance: slider-vertical;
    orient: vertical;
  }
</style>
