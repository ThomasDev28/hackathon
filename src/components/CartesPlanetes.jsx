import React, { useState, useEffect } from "react";
import "./CartesPlanetes.css";
import { Link, Route, Switch, useParams, useHistory } from "react-router-dom";
import Information from "./Information";

export default function CartesPlanetes() {
  const params = useParams();
  const history = useHistory();

  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    fetch(`https://images-api.nasa.gov/search?q=${params.name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.collection.items);
        const planeteData = data.collection.items.slice(1, 7).map((item) => {
          const picture = {
            image: item.links[0]?.href,
            dateCreation: item.data[0].date_created,
            description: item.data[0].description,
            title: item.data[0].title,
            media: item.data[0].media_type,
          };
          return picture;
        });
        console.log(planeteData);
        setPlanet(planeteData);
      });
  }, []);

  const infoClick = (url) => {
    history.push(url);
  };

  return (
    <div className="container-planete">
      <div className="container-carte">
        {/* <p>{params.name}</p> */}

        <Switch>
          <Route exact path={`/cartes/${params.name}`}>
            {planet.map((picture, index) => (
              <div
                onClick={() => infoClick(`/cartes/${params.name}/${index}`)}
                className="carte-planete"
              >
                <img src={picture.image} alt={picture.name} />
                <div className="txt-cartes">
                  <h2>{picture.title}</h2>
                  <h3>{picture.description}</h3>
                  <h4>{picture.dateCreation}</h4>
                </div>
              </div>
            ))}
          </Route>
          <Route path={`/cartes/${params.name}/:index`}>
            <Information pictures={planet} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
