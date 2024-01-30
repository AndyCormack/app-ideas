<script>
  import '../app.css'
</script>

<header class="navbar bg-base-200 sticky top-0 bg-opacity-85 backdrop-blur">
  <div class="navbar-start">
    <div class="dropdown dropdown-hover">
      <div tabindex="0" role="button" class="btn btn-ghost">Tier 1</div>

      <ul class="menu dropdown-content shadow shadow-black/50 bg-base-200 w-52">
        <li><a href="/tier-1/bin2dec">Bin2Dec</a></li>
        <li>
          <a href="/tier-1/border-radius-previewer">Border-radius Previewer</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="navbar-center">
    <a href="/" class="btn btn-ghost text-xl">App Ideas</a>
  </div>

  <div class="navbar-end"></div>
</header>

<main class="w-full max-w-screen-md mx-auto p-4">
  <slot />
</main>
