<script lang="ts">
  import Icon from '@iconify/svelte'

  let on = $state(true)
  let interval = $state(0.5)
  let intensity = $state(1)
  let dragging = $state(false)

  const lights = $state([
    { color: '#ff3333', height: 72, width: 72 },
    { color: '#ffbb44', height: 72, width: 72 },
    { color: '#55ddff', height: 72, width: 72 },
    { color: '#00ff7b', height: 72, width: 72 },
    { color: '#ee71fe', height: 72, width: 72 },
    { color: '#ffaacc', height: 72, width: 72 },
    { color: '#ffffff', height: 72, width: 72 },
  ])
  const tallestLight = $derived(
    80 + Math.max(...lights.map((light) => light.height), 0)
  )

  function resizeLight(event: Event, light: (typeof lights)[0]) {
    dragging = false
    if (!event.currentTarget) {
      return
    }

    const lightElement: HTMLElement | null = event.currentTarget as HTMLElement
    const { width, height } = lightElement.getBoundingClientRect()

    light.height = height
    light.width = width
  }
</script>

<h1 class="text-3xl text-center mb-8">Christmas Lights</h1>

<div
  class="string flex justify-center mb-20"
  style:margin-bottom="{tallestLight}px"
>
  {#each lights as light, i}
    <div
      class="light-container relative group flex p-3 -mt-1"
      style:height="{light.height}px"
      style:width="{light.width}px"
      on:pointerdown={() => (dragging = true)}
      on:pointerup={(e) => resizeLight(e, light)}
    >
      <label
        class="light flex"
        style="
        --color: {on ? light.color : 'transparent'};
        --interval: {interval}s;
        --offset: {(i % 2) * interval}s;
        --intensity: {intensity};
      "
      >
        <input
          type="color"
          class="sr-only"
          disabled={dragging}
          aria-label="Pick a colour for light {i + 1}"
          bind:value={light.color}
        />
        <div class="focus-outline" />

        <div
          class="absolute w-full h-full cursor-pointer opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-150 flex items-center justify-center"
        >
          <Icon icon="pepicons-pop:color-picker" class="text-xl" />
        </div>
      </label>
    </div>
  {/each}
</div>

<div class="flex flex-wrap justify-end items-center gap-8">
  <label class="form-control">
    Intensity: {intensity}

    <input
      type="range"
      class="range range-secondary"
      min="0"
      max="1"
      step="0.1"
      bind:value={intensity}
    />
  </label>

  <label class="form-control">
    {#if interval > 0}
      Interval: {interval}s
    {:else}
      Constant
    {/if}

    <input
      type="range"
      class="range range-secondary"
      min="0"
      max="5"
      step="0.25"
      bind:value={interval}
    />
  </label>

  <label class="flex">
    <span class="mr-2">{on ? 'On' : 'Off'}</span>
    <input type="checkbox" class="toggle toggle-success" bind:checked={on} />
  </label>
</div>

<style>
  .string {
    height: 0.3rem;
    background: #000;
  }

  .light-container:hover {
    resize: both;
    overflow: hidden;
  }

  .light {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #fff4;
    background-image: radial-gradient(
      circle,
      #fff5 0%,
      #fff0 25%,
      #fff0 50%,
      #fff5 75%,
      #fff5 100%
    );
  }
  .light::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 1rem;
    height: 0.5rem;
    background-color: #000;
  }
  .light::after {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    color: #fff;
    background-color: var(--color, currentColor);
    box-shadow: 0 0 0.75rem var(--color, currentColor);
    animation-name: switch;
    animation-delay: var(--offset, 0);
    animation-duration: var(--interval, 0);
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  .focus-outline {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    outline: 0.2rem solid transparent;
    transition: outline-color 150ms ease-in-out;
  }
  :focus + .focus-outline {
    outline-color: #fff;
    animation: pulse 1s infinite;
  }

  @keyframes switch {
    0% {
      opacity: var(--intensity, 1);
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes pulse {
    0% {
      outline-width: 0.2rem;
      outline-offset: 0;
    }
    100% {
      outline-width: 0;
      outline-offset: 0.5rem;
      opacity: 0;
    }
  }
</style>
