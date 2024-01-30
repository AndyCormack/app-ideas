<script lang="ts">
  let on = $state(true)
  let interval = $state(0.5)

  const lights = [
    { color: 'red' },
    { color: 'orange' },
    { color: 'cyan' },
    { color: 'lime' },
    { color: '#62f' },
    { color: 'violet' },
    { color: 'white' },
  ]
</script>

<h1 class="text-3xl text-center mb-8">Christmas Lights</h1>

<div class="string flex justify-center mb-20">
  {#each lights as light, i}
    <div
      class="light m-2"
      style="--color: {on ? light.color : '#222'}; animation-delay: {(i % 2) *
        interval}s;"
      style:animation-timeline={on ? 'infinite' : 'none'}
      style:animation-duration="{interval}s"
    />
  {/each}
</div>

<div class="flex justify-end items-center gap-8">
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
    color: #fff;
    background-color: var(--color, currentColor);
    border: 1px solid #fff5;
    box-shadow: 0 0 1rem var(--color, currentColor);
    animation-name: switch;
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-iteration-count: infinite;
    animation-direction: alternate;
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
    position: absolute;
    width: 100%;
    height: 100%;
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

  @keyframes switch {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
</style>
