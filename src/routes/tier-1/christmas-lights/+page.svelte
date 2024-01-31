<script lang="ts">
  import Icon from '@iconify/svelte'

  let on = $state(true)
  let interval = $state(0.5)
  let intensity = $state(1)

  const lights = $state([
    { color: '#ff3333' },
    { color: '#ffbb44' },
    { color: '#55ddff' },
    { color: '#00ff7b' },
    { color: '#ee71fe' },
    { color: '#ffaacc' },
    { color: '#ffffff' },
  ])
</script>

<h1 class="text-3xl text-center mb-8">Christmas Lights</h1>

<div class="string flex justify-center mb-20">
  {#each lights as light, i}
    <label
      class="light m-2 group"
      style="
        --color: {on ? light.color : 'transparent'};
        --interval: {interval}s;
        --offset: {(i % 2) * interval}s;
        --intensity: {intensity};
      "
    >
      <input type="color" class="hidden" bind:value={light.color} />

      <div
        class="absolute w-full h-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center"
      >
        <Icon icon="pepicons-pop:color-picker" class="text-xl" />
      </div>
    </label>
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

  .light {
    position: relative;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
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
    box-shadow: 0 0 1rem var(--color, currentColor);
    animation-name: switch;
    animation-delay: var(--offset, 0);
    animation-duration: var(--interval, 0);
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes switch {
    0% {
      opacity: var(--intensity, 1);
    }
    100% {
      opacity: 0;
    }
  }
</style>
