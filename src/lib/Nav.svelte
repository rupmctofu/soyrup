<script>
  import { ui } from "$content/nav";
  import { page } from "$app/stores";
</script>

<nav class="top-nav row jbetween acenter">
  <a href="/" class="row acenter">
    <strong class="logo"><b>RUP</b> | PORTFOLIO</strong>
  </a>

  <ul class="desktop-menu row yfill">
    {#each ui.routes as { slug, title }}
      <li class="yfill" class:active={$page.url.pathname === slug}>
        <a href={slug} class="row nowrap acenter fill">{title}</a>
      </li>
    {/each}
  </ul>
</nav>

<nav class="bottom-nav xfill">
  <ul class="mobile-menu row nowrap fill">
    {#each ui.routes as { slug, title, icon }}
      <li class="row yfill">
        <a href={slug} class="row fcenter fill">
          <img src={icon} alt={title} />
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  .top-nav {
    position: fixed;
    top: 20px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: calc(100% - 40px);
    max-width: 1200px;
    height: 80px;
    background: rgba($black, 0.3);
    backdrop-filter: blur(10px);
    letter-spacing: 0.15em;
    border-radius: 16px;
    box-shadow: inset 1px 1px 2px -1px rgba($white, 0.4), inset -1px -1px 2px -1px rgba($black, 0.4);
    padding: 0 40px;
    z-index: 99;

    @media (max-width: $tablet) {
      height: 60px;
      padding: 0 20px;
      justify-content: center;
    }
  }

  .logo {
    font-size: 18px;
    color: $sec;

    @media (max-width: $tablet) {
      font-size: 14px;
    }
  }

  .desktop-menu {
    @media (max-width: $tablet) {
      display: none;
    }
  }

  li {
    cursor: pointer;
    padding: 0 20px;

    a {
      font-size: 12px;
      text-transform: uppercase;
      color: $sec;
      transition: 200ms;

      &:hover {
        color: $pri;
      }
    }
  }

  .active a {
    text-decoration: underline;
  }

  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 1200px;
    height: 75px;
    display: none;
    background: rgba($black, 0.3);
    backdrop-filter: blur(10px);
    letter-spacing: 0.15em;
    box-shadow: inset 0 1px 2px -1px rgba($white, 0.4), inset 0 -1px 2px -1px rgba($black, 0.4);
    z-index: 99;

    @media (max-width: $tablet) {
      display: flex;
    }

    li {
      width: calc(100% / 4);
      padding: 0;

      img {
        width: 20px;
        object-fit: contain;
        opacity: 0.5;
      }
    }
  }
</style>
