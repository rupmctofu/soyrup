<script>
  import "$fonts/integral.css";
  import "$fonts/operator.css";
  import Nav from "$lib/Nav.svelte";
</script>

<main>
  <Nav />

  <div class="video-wrapper fill">
    <div class="overlay fill" />
    <video playsinline autoplay loop muted src="/bg.mp4" class="fill" />
  </div>

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

  .video-wrapper {
    position: fixed;
    top: 0;
    left: 0;

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      background: rgba($black, 0.7);
    }

    video {
      object-fit: cover;
      object-position: center;
    }
  }
</style>
