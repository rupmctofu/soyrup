<script>
  import "$fonts/integral.css";
  import "$fonts/operator.css";
  import Nav from "$lib/Nav.svelte";
</script>

<main>
  <Nav />

  <div class="bg-grad-1 row fill" />
  <div class="bg-grad-2 row fill" />

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

  @mixin dots($count) {
    $text-shadow: ();
    @for $i from 0 through $count {
      $text-shadow: $text-shadow,
        (-0.5+ (random()) * 3) + em (-0.5+ (random()) * 1) + em 7px hsla(random() * 150, 50%, 50%, 0.9);
    }
    text-shadow: $text-shadow;
  }

  .bg-grad-1,
  .bg-grad-2 {
    position: fixed;
    top: 50%;
    left: 50%;
    font-size: 150px;
    color: transparent;

    @media (max-width: $tablet) {
      font-size: 100px;
    }

    @media (max-width: $mobile) {
      font-size: 20px;
    }
  }

  .bg-grad-2::before,
  .bg-grad-2::after,
  .bg-grad-1::before,
  .bg-grad-1::after {
    width: 3em;
    height: 3em;
    content: ".";
    mix-blend-mode: screen;
    animation: 44s -27s move infinite ease-in-out alternate;
    opacity: 0.5;
  }

  .bg-grad-1::before {
    @include dots(50);
    animation-duration: 44s;
    animation-delay: -27s;
  }

  .bg-grad-1::after {
    @include dots(50);
    animation-duration: 43s;
    animation-delay: -32s;
  }

  .bg-grad-2::before {
    @include dots(50);
    animation-duration: 42s;
    animation-delay: -23s;
  }

  .bg-grad-2::after {
    @include dots(50);
    animation-duration: 41s;
    animation-delay: -19s;
  }

  @keyframes move {
    from {
      transform: rotate(0deg) scale(12) translateX(-20px);
    }
    to {
      transform: rotate(360deg) scale(18) translateX(20px);
    }
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
      background-size: 300%;
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
