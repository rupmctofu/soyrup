<script>
  import { ui } from "$content/contact";

  let form = {};

  function clearForm() {
    form = {
      name: "",
      email: "",
      message: "",
    };
  }

  async function sendForm() {
    const req = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (req.ok) {
      clearForm();
    }
  }
</script>

<div class="content col acenter xfill">
  <h2>{ui.title}</h2>

  <form class="col xfill" on:submit|preventDefault={sendForm}>
    <div class="dbl-input row jbetween xfill">
      <div class="input-wrapper col">
        <label for="input_name">{ui.input_name}</label>
        <input id="input_name" class="xfill" type="text" bind:value={form.name} placeholder={ui.input_name} required />
      </div>

      <div class="input-wrapper col">
        <label for="input_email">{ui.input_email}</label>
        <input
          id="input_email"
          class="xfill"
          type="email"
          bind:value={form.email}
          placeholder={ui.input_email}
          required
        />
      </div>
    </div>

    <div class="input-wrapper col xfill">
      <label for="input_message">{ui.input_message}</label>
      <textarea id="input_message" class="xfill" bind:value={form.message} placeholder={ui.input_message} required />
    </div>

    <div class="row xfill jcenter">
      <button class="pri semi">{ui.button_send}</button>
    </div>
  </form>
</div>

<style lang="scss">
  .content {
    padding: 60px;

    @media (max-width: $tablet) {
      padding: 20px;
    }
  }

  h2 {
    color: $sec;
    margin-bottom: 40px;
  }

  form {
    max-width: 900px;
  }

  .input-wrapper {
    margin-bottom: 20px;
  }

  .dbl-input {
    .input-wrapper {
      width: calc(50% - 10px);
    }
  }

  label {
    color: $sec;
    font-size: 12px;
    padding: 0 0 10px 15px;
  }

  input,
  textarea {
    background: rgba($white, 5%);
    backdrop-filter: blur(10px);
    color: $sec;
    font-weight: bold;
    border-radius: 8px;
    box-shadow: inset 2px 2px 4px -1px rgba($black, 0.4);
    padding: 18px 24px;
  }

  textarea {
    height: 200px;
    resize: none;
  }

  button {
    width: 70%;
    max-width: 200px;
  }
</style>
