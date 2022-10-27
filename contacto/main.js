function contacto(el) {
  const contactoEl = document.createElement("div");
  contactoEl.innerHTML = `
  <div class="form-conta">
  <section class="hero">
    <div class="hero-body">
      <p class="title">contacto</p>
    </div>
  </section>

  <section class="from">
    <div class="field">
      <label class="label">nombre</label>
      <div class="control">
        <input class="input" type="text" placeholder="nombre" />
      </div>
    </div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="email"
          placeholder="Email input"
          value="Email"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Mensaje</label>
      <div class="control">
        <textarea class="textarea" placeholder="mensaje"></textarea>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Enviar</button>
      </div>
    </div>
  </section>
</div>`;
  const formel = contactoEl.querySelector(".form-conta");
}
