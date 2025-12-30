const app = document.getElementById("app")

const routes = {
  menu: () => {
    app.textContent = "menu"
  },
  game: () => {
    app.textContent = "gra"
  },
  settings: () => {
    app.textContent = "ustawienia"
  }
}

function renderRoute() {
  // location to adres przegladarki po dodaniuu hash dostajemy to co jest po #
  //np #menu wtedy w url wlasnie jestesmy w menu jesli dalibysmy .href dostalibys calkowity adres
  // slice po prostu ucina nam pierwszy znak czyli hasztag ktorego nie chcemy 
  const route = location.hash.slice(1) || "menu";

  document.querySelectorAll("[data-view]").forEach(view => {
    view.hidden = view.dataset.view !== route;
  });
}

window.addEventListener("hashchange", renderRoute);

document.querySelectorAll(".route-btn").forEach(button => {
  button.addEventListener("click", () => {
    location.hash = button.dataset.route;
  });
});

renderRoute()
