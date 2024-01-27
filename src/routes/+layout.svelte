<script>
  import '../app.css'
</script>

<header class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost">Tier 1</div>

      <ul
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow shadow-black/50 bg-base-100 rounded-box w-52"
      >
        <li><a href="/tier-1/bin2dec">Bin2Dec</a></li>
      </ul>
    </div>
  </div>

  <div class="navbar-center">
    <a href="/" class="btn btn-ghost text-xl">App Ideas</a>
  </div>
</header>

<slot />
