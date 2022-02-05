<script>
  import "$fonts/integral.css";
  import "$fonts/operator.css";
  import Nav from "$lib/Nav.svelte";
</script>

<main>
  <Nav />

  <div class="scroll fill">
    <slot />
  </div>
</main>

<style lang="scss">
  :global {
    @import "./src/_reset.scss";
    @import "../node_modules/verdu/verdu.scss";

    .scroll {
      scroll-behavior: smooth;
    }
  }

  .scroll {
    background: url("../../../dots.svg");
    background-position: top left;
    animation: moveBg 20s ease infinite alternate;
  }

  @keyframes moveBg {
    0% {
      background-position: top left;
      background-size: 100%;
    }
    20% {
      background-position: bottom right;
      background-size: 200%;
    }
    40% {
      background-position: center;
      background-size: 100%;
    }
    60% {
      background-position: center;
      background-size: 500%;
    }
    80% {
      background-position: center;
      background-size: 200%;
    }
    100% {
      background-position: top left;
      background-size: 100%;
    }
  }
</style>
