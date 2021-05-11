import React from "react";
import Accueil from "./components/Accueil";
import "./App.css";

function App() {
  const listePlanet = [
    {
      name: "Terre",
      image:
        "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/f/d/9/fd934cf78c_50013319_terre-02.jpg",
    },
    {
      name: "Mars",
      image:
        "http://4.bp.blogspot.com/-Sjfq6BDBRFM/UuO6FkcdR6I/AAAAAAAAGwo/chO48ldMOi4/s1600/mars-planet.jpg",
    },
    {
      name: "Jupiter",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
    },
    {
      name: "Saturne",
      image:
        "https://images.radio-canada.ca/q_auto,w_1250/v1/ici-info/16x9/saturne-image-nasa.jpg",
    },
    {
      name: "Venus",
      image:
        "https://blogs.letemps.ch/pierre-brisson/wp-content/uploads/sites/31/2020/09/Venus-Mariner-10-2524_PIA23791.jpg",
    },
    {
      name: "Mercure",
      image:
        "https://www.astro-rennes.com/planetes/images/mercure/detail_mercure.jpg",
    },
  ];

  return (
    <div className="App">
      {listePlanet.map((planete) => <Accueil {...planete} />)}
    </div>
  );
}

export default App;
