<script>
  import { ui } from "$content/error";
</script>

<div class="col fcenter fill">
  <h1>{ui.title}</h1>
  <p>{ui.description}</p>
  <a class="btn pri semi" href="/">{ui.button}</a>
</div>

<style lang="scss">
  h1,
  p {
    color: $sec;
    margin-bottom: 20px;
  }

  a.btn {
    margin-top: 20px;
  }
</style>
