<script>
  export let title, src;
  let contentType = src.includes("/embed/") ? "video" : "image";
</script>

<div class="mockup-wrapper row jcenter xfill">
  {#if contentType === "image"}
    <div class="mockup-display row fcenter">
      <img {src} alt={title} />
    </div>
  {:else}
    <div class="mockup-display row fcenter">
      <iframe
        {src}
        {title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  {/if}

  <img class="mockup" src="/mockup.png" alt="Mockup" />
</div>

<style lang="scss">
  .mockup-wrapper {
    position: relative;

    .mockup-display {
      width: 720px;
      max-width: 90vw;
      height: calc(720px / 1.6);
      max-height: calc(90vw / 1.6);
      background: $black;

      @media (max-width: $tablet) {
        width: 71vw;
        height: calc(71vw / 1.6);
      }
    }

    img,
    iframe {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }

    .mockup {
      position: absolute;
      top: -8%;
      left: -4px;
      right: 0;
      margin: 0 auto;
      width: 1000px;
      max-width: 100%;
      height: 120%;
      object-fit: contain;
      object-position: top center;
      pointer-events: none;

      @media (max-width: $mobile) {
        left: 0;
      }
    }
  }
</style>
