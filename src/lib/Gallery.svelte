<script>
  export let title, images;
</script>

<ul class="gallery-wrapper row jcenter xfill">
  {#each images as src}
    <li>
      <img class="fill" {src} alt={title} />
    </li>
  {/each}
</ul>

<style lang="scss">
  ul {
    margin-top: 80px;

    @media (max-width: $mobile) {
      margin-top: 40px;
    }

    li {
      --card-width: calc(40vw - 20px);
      --max-card-width: 600px;
      --min-card-width: 270px;
      width: var(--card-width);
      max-width: var(--max-card-width);
      min-width: var(--min-card-width);
      height: calc(var(--card-width) / 1.618);
      max-height: calc(var(--max-card-width) / 1.618);
      min-height: calc(var(--min-card-width) / 1.618);
      background: $pri;
      border-radius: 16px;
      margin: 10px;
      overflow: hidden;

      img {
        object-fit: cover;
        object-position: center;
      }
    }
  }
</style>
