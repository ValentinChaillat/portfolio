import React, { Component } from "react";

class Presentation extends Component {
  render() {
    return (
      <div className="presentation">
        <h1 className="col-12 m-0 mb-3 p-0 text-center">Presentation</h1>
        <div className="col-12 m-0 p-0 haut">
          <img alt="Photo de valentin chaillat" src="../img/pdp.png"></img>

          <h2 className="text-center">Valentin Chaillat</h2>
          <p className="text-center">Développeur Front end / Intégrateur Web</p>
        </div>
        <div className="col-12 m-0 p-0 bas row">
          <p className="col-11 offset-1 p-0 my-0">
            Passionné du numérique / Geek, je trouve mon bonheur sur tous les
            écrans.
          </p>
          <div className="col-12 p-0 m-0 mt-3 row">
            <div className="col-1 p-0 m-0">
              <img alt="icone de pouce" src="../img/pouce.png"></img>
            </div>
            <p className="col-11 p-0 m-0">
              J’aime les twists final dans les films et le grésillement des
              vinyles au contact du diamant, mais ma principale source de
              satisfaction est d’aboutir à un code propre et fonctionnel.
            </p>
          </div>
          <div className="col-12 p-0 m-0 mt-3 row">
            <div className="col-1 p-0 m-0">
              <img alt="icone de manette" src="../img/manette.png"></img>
            </div>
            <p className="col-11 p-0 m-0">
              Si je ne code pas, je tue mon temps sur des jeux vidéo entre amis
              ou je surfe sur des sites de vente de piano dans le but de me
              motiver à en acheter un.
            </p>
          </div>
          <div className="col-12 p-0 m-0 mt-3 row">
            <div className="col-1 p-0 m-0">
              <img alt="icone d'horloge" src="../img/horloge.png"></img>
            </div>
            <p className="col-10 p-0 m-0">
              Trop souvent, on me demande ce que j’aimerais faire plus tard,
              mais malheureusement on ne peut vivre que le présent donc la
              réponse ne m’appartient pas.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Presentation;
