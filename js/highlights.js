AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },
  update: function () {
    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    // Verificar si el plano infoBanner ya tiene la entidad hija del texto con la información de la historieta,
    // de ser así, eliminar la hija para evitar el sobrelapamiento del texto.
    c = fadeBackgroundEl.children;
    if (c.length > 0) {
      var i;
      for (i = 0; i <= c.length; i++) {
        fadeBackgroundEl.removeChild(c[i]);
      }
    } else {
      this.handleMouseClickEvents();
    }
  },
  handleMouseEnterEvents: function () {
    // Evento 'mouseenter' del cursor.
    this.el.addEventListener("mouseenter", () => {
      const id = this.el.getAttribute("id");
      const postersId = [
        "superman",
        "spiderman",
        "captain-aero",
        "outer-space",
      ];
      if (postersId.includes(id)) {
        const postersContainer = document.querySelector("#posters-container");
        postersContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", { color: "#1565c0" });
      }
    });
  },
  handleMouseLeaveEvents: function () {
    // Evento 'mouseleave' del cursor.
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", { color: "#fff" });
        }
      }
    });
  },
  handleMouseClickEvents: function () {
    // Evento clic del cursor.
    this.el.addEventListener("click", () => {
      const { selectedItemId } = this.data;

      const fadeBackgroundEl = document.querySelector("#fadeBackground");
      const titleEl = document.querySelector("#app-title");
      const cursorEl = document.querySelector("#camera-cursor");

      // Verificar el elemento seleccionado para establecer el componente "info-banner" en el plano.
      //COMPLETA LA FUNCIÓN.


    });
  },
});
