AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      superman: {
        banner_url: "./assets/posters/superman-banner.jpg",
        title: "Superman",
        released_year: "1983",
        description:
          "Superman es una serie de historietas estadounidense que tiene como protagonista al superhéroe de DC Comics, Superman. Superman comenzó como uno de los varios personajes de la antología 'Historietas de acción' de National Periodical Publications en junio de 1938. La tira resultó ser tan popular que National lanzó a Superman con su propio cómic autotitulado, el primero para cualquier superhéroe, estrenándose con la fecha de portada del verano de 1939.",
      },
      spiderman: {
        banner_url: "./assets/posters/spiderman-banner.png",
        title: "Spider-Man",
        released_year: "1962",
        description:
          "Spider-Man es un superheroe ficticio creado por el escritor y editor Stan Lee y el escritor y artista Steve Ditko. Aparece por primera vez en la historieta de antologia Amazing Fantasy (agosto de 1962) en la Edad de Plata de las historietas.",
      },
      "captain-aero": {
        banner_url: "./assets/posters/captain-aero-banner.jpg",
        title: "Capitan Aero",
        released_year: "1942",
        description:
          "Capitán Aero es una historieta de la Edad de Oro del Cómic, publicado originalmente por Helnit Publishing y adquirido por Holyoke Publishing en 1942. El número se publicó en diciembre de 1941, y se mantuvo hasta el agosto de 1946.",
      },
      "outer-space": {
        banner_url: "./assets/posters/outer-space-banner.jpg",
        title: "Outer Space",
        released_year: "1952",
        description:
          "¡Este es el tema más vital de nuestros tiempos! ¡¡Todo hombre... mujer... y niño... le debe a su país y a sí mismo, leer esta historieta!!",
      },
    };
    const { itemId } = this.data;

    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = postersInfo[itemId];

    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityEl.setAttribute("material", { src: item.banner_url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityEl;
  },
});
