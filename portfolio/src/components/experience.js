import React, { Component } from "react";
import { Button, Popover, PopoverBody, PopoverHeader } from "shards-react";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
      open6: false,
      open7: false,
    };
  }
  handleChangeDate(e) {
    if (e === 1) {
      this.setState({
        open1: !this.state.open1,
        open2: false,
        open3: false,
        open4: false,
        open5: false,
        open6: false,
        open7: false,
      });
    }
    if (e === 2) {
      this.setState({
        open2: !this.state.open2,
        open1: false,
        open3: false,
        open4: false,
        open5: false,
        open6: false,
        open7: false,
      });
    }
    if (e === 3) {
      this.setState({
        open3: !this.state.open3,
        open2: false,
        open1: false,
        open4: false,
        open5: false,
        open6: false,
        open7: false,
      });
    }
    if (e === 4) {
      this.setState({
        open4: !this.state.open4,
        open2: false,
        open3: false,
        open1: false,
        open5: false,
        open6: false,
        open7: false,
      });
    }
    if (e === 5) {
      this.setState({
        open5: !this.state.open5,
        open2: false,
        open3: false,
        open4: false,
        open1: false,
        open6: false,
        open7: false,
      });
    }
    if (e === 6) {
      this.setState({
        open6: !this.state.open6,
        open2: false,
        open3: false,
        open4: false,
        open5: false,
        open1: false,
        open7: false,
      });
    }
    if (e === 7) {
      this.setState({
        open7: !this.state.open7,
        open2: false,
        open3: false,
        open4: false,
        open5: false,
        open6: false,
        open1: false,
      });
    }
  }

  render() {
    return (
      <div className="experience">
        <div>
          <h1>Experience</h1>
        </div>
        <div className="timeline col-12 row">
          <div className="col-1 p-0 m-0">
            <Button
              className="col-12 p-0 m-0"
              id="popover-1"
              onClick={(e) => this.handleChangeDate(1)}
            >
              Kimo
            </Button>
            <Popover
              placement="top"
              open={this.state.open1}
              toggle={(e) => this.handleChangeDate(1)}
              target="#popover-1"
            >
              <PopoverHeader>
                <h2>Kimo Instrumental</h2>
              </PopoverHeader>
              <PopoverBody>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Durée -</p>
                  <p className="gris m-0">4 mois</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Poste -</p>
                  <p className="gris m-0">Technicien électronique</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Contrat -</p>
                  <p className="gris m-0">Intérim</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="col-12 m-0 p-0">Description du poste</p>
                  <p className="gris col-12 m-0 p-0">
                    Fabrication d’appareil de controle de qualitée de l’air
                  </p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row last">
                  <p className="col-12 m-0 p-0">Tâches éffectués</p>
                  <p className="gris col-12 m-0 p-0">-Programmation</p>
                  <p className="gris col-12 m-0 p-0">-Ajustage</p>
                  <p className="gris col-12 m-0 p-0">-Montage</p>
                  <p className="gris col-12 m-0 p-0">-Contrôle de qualitée</p>
                </div>
              </PopoverBody>
            </Popover>
          </div>
          <div className="col-2 p-0 m-0 pl-1">
            <Button
              className="col-12 p-0 m-0"
              id="popover-2"
              onClick={(e) => this.handleChangeDate(2)}
            >
              BTS
            </Button>
            <Popover
              placement="top"
              open={this.state.open2}
              toggle={(e) => this.handleChangeDate(2)}
              target="#popover-2"
            >
              <PopoverHeader>
                <h2>BTS Système Numérique</h2>
                <h2 className="child">Option Électronique et Communication</h2>
              </PopoverHeader>
              <PopoverBody>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Durée -</p>
                  <p className="gris m-0">6 mois</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Année -</p>
                  <p className="gris m-0">Première année</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Lycée -</p>
                  <p className="gris m-0">Alfred Kastler</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="col-12 m-0 p-0">Tâches effectuées</p>
                  <p className="gris col-12 m-0 p-0">-Gestion de projet</p>
                  <p className="gris col-12 m-0 p-0">
                    -Programmation orientéd objet
                  </p>
                  <p className="gris col-12 m-0 p-0">-Algorithme</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row last">
                  <p className="col-12 m-0 p-0">Matières</p>
                  <p className="gris col-12 m-0 p-0">
                    -Electronique et communication
                  </p>
                  <p className="gris col-12 m-0 p-0">
                    -Informatique et réseaux
                  </p>
                  <p className="gris col-12 m-0 p-0">-Physique appliquée</p>
                </div>
              </PopoverBody>
            </Popover>
          </div>
          <div className="col-1 p-0 m-0 pl-1">
            <Button
              className="col-12 p-0 m-0"
              id="popover-3"
              onClick={(e) => this.handleChangeDate(3)}
            >
              Kimo
            </Button>
            <Popover
              placement="top"
              open={this.state.open3}
              toggle={(e) => this.handleChangeDate(3)}
              target="#popover-3"
            >
              <PopoverHeader>
                <h2>Kimo Instrumental</h2>
              </PopoverHeader>
              <PopoverBody>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Durée -</p>
                  <p className="gris m-0">2 mois</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Poste -</p>
                  <p className="gris m-0">Technicien électronique</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Contrat -</p>
                  <p className="gris m-0">Stage</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="col-12 m-0 p-0">Description du poste</p>
                  <p className="gris col-12 m-0 p-0">
                    Fabrication d’appareil de controle de qualitée de l’air
                  </p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row last">
                  <p className="col-12 m-0 p-0">Tâches éffectués</p>
                  <p className="gris col-12 m-0 p-0">-Programmation</p>
                  <p className="gris col-12 m-0 p-0">-Ajustage</p>
                  <p className="gris col-12 m-0 p-0">-Montage</p>
                  <p className="gris col-12 m-0 p-0">-Contrôle de qualitée</p>
                </div>
              </PopoverBody>
            </Popover>
          </div>
          <div className="col-2 offset-1 p-0 pl-1">
            <Button
              className="col-12 p-0 m-0"
              id="popover-4"
              onClick={(e) => this.handleChangeDate(4)}
            >
              BTS
            </Button>
            <Popover
              placement="top"
              open={this.state.open4}
              toggle={(e) => this.handleChangeDate(4)}
              target="#popover-4"
            >
              <PopoverHeader>
                <h2>BTS Système Numérique</h2>
                <h2 className="child">Option Électronique et Communication</h2>
              </PopoverHeader>
              <PopoverBody>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Durée -</p>
                  <p className="gris m-0">6 mois</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Année -</p>
                  <p className="gris m-0">Deuxième année</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Lycée -</p>
                  <p className="gris m-0">Alfred Kastler</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="col-12 m-0 p-0">Tâches effectuées</p>
                  <p className="gris col-12 m-0 p-0">-Gestion de projet</p>
                  <p className="gris col-12 m-0 p-0">
                    -Programmation orientéd objet
                  </p>
                  <p className="gris col-12 m-0 p-0">-Algorithme</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row last">
                  <p className="col-12 m-0 p-0">Matières</p>
                  <p className="gris col-12 m-0 p-0">
                    -Electronique et communication
                  </p>
                  <p className="gris col-12 m-0 p-0">
                    -Informatique et réseaux
                  </p>
                  <p className="gris col-12 m-0 p-0">-Physique appliquée</p>
                </div>
              </PopoverBody>
            </Popover>
          </div>
          <div className="col-1 p-0 m-0 pl-1">
            <Button
              className="col-12 p-0 m-0"
              id="popover-5"
              onClick={(e) => this.handleChangeDate(5)}
            >
              Kimo
            </Button>
            <Popover
              placement="top"
              open={this.state.open5}
              toggle={(e) => this.handleChangeDate(5)}
              target="#popover-5"
            >
              <PopoverHeader>Kimo Instrumental</PopoverHeader>
              <PopoverBody>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Durée -</p>
                  <p className="gris m-0">4 mois</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Poste -</p>
                  <p className="gris m-0">Technicien électronique</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Contrat -</p>
                  <p className="gris m-0">Intérim</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="col-12 m-0 p-0">Description du poste</p>
                  <p className="gris col-12 m-0 p-0">
                    Fabrication d’appareil de controle de qualitée de l’air
                  </p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row last">
                  <p className="col-12 m-0 p-0">Tâches éffectués</p>
                  <p className="gris col-12 m-0 p-0">-Programmation</p>
                  <p className="gris col-12 m-0 p-0">-Ajustage</p>
                  <p className="gris col-12 m-0 p-0">-Montage</p>
                  <p className="gris col-12 m-0 p-0">-Contrôle de qualitée</p>
                </div>
              </PopoverBody>
            </Popover>
          </div>
          <div className="col-2 p-0 m-0 pl-1">
            <Button
              className="col-12 p-0 m-0"
              id="popover-6"
              onClick={(e) => this.handleChangeDate(6)}
            >
              ECV
            </Button>
            <Popover
              placement="top"
              open={this.state.open6}
              toggle={(e) => this.handleChangeDate(6)}
              target="#popover-6"
            >
              <PopoverHeader>
                {" "}
                <h2>ECV Digital</h2>
                <h2 className="child">Bachelor Chef de Projet Digital</h2>
              </PopoverHeader>
              <PopoverBody>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Durée -</p>
                  <p className="gris m-0">6 mois</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Ville -</p>
                  <p className="gris m-0">Bordeaux</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="col-12 m-0 p-0">Résumé</p>
                  <p className="gris col-12 m-0 p-0">-Refonte de site</p>
                  <p className="gris col-12 m-0 p-0">-Formation CSS</p>
                  <p className="gris col-12 m-0 p-0">-Versionning de code</p>
                  <p className="gris col-12 m-0 p-0">-Hackaton</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row last">
                  <p className="col-12 m-0 p-0">Matières</p>
                  <p className="gris col-12 m-0 p-0">-Project management</p>
                  <p className="gris col-12 m-0 p-0">-Creative JS</p>
                  <p className="gris col-12 m-0 p-0">-php</p>
                  <p className="gris col-12 m-0 p-0">-Web-Design</p>
                  <p className="gris col-12 m-0 p-0">-UX</p>
                  <p className="gris col-12 m-0 p-0">-Web-Marketing</p>
                  <p className="gris col-12 m-0 p-0">-Culture Digitale</p>
                </div>
              </PopoverBody>
            </Popover>
          </div>
          <div className="col-2 p-0 m-0 pl-1">
            <Button
              className="col-9 p-0 m-0"
              id="popover-7"
              onClick={(e) => this.handleChangeDate(7)}
            >
              Emsproto
            </Button>
            <Popover
              placement="top"
              open={this.state.open7}
              toggle={(e) => this.handleChangeDate(7)}
              target="#popover-7"
            >
              <PopoverHeader>
                <h2>EMS-Proto</h2>
              </PopoverHeader>
              <PopoverBody>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Durée -</p>
                  <p className="gris m-0">6 mois</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Poste -</p>
                  <p className="gris m-0">Développeur Front End</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="m-0">Contrat -</p>
                  <p className="gris m-0">Stage</p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row">
                  <p className="col-12 m-0 p-0">Description du poste</p>
                  <p className="gris col-12 m-0 p-0">
                    Création d'un site web comparateur
                  </p>
                </div>
                <div className="col-12 p-0 pb-2 m-0  row last">
                  <p className="col-12 m-0 p-0">Technologies utilisées</p>
                  <p className="gris col-12 m-0 p-0">-HTML5 / CSS3 / SASS</p>
                  <p className="gris col-12 m-0 p-0">-React.js</p>
                  <p className="gris col-12 m-0 p-0">-Node.js</p>
                  <p className="gris col-12 m-0 p-0">-PHP</p>
                  <p className="gris col-12 m-0 p-0">-Figma</p>
                </div>
              </PopoverBody>
            </Popover>
          </div>

          <div className="col-12 p-0 m-0">
            <img alt="fleche de la timeline" src="../img/arrow.png"></img>
            <div className="col-12 p-0 m-0 row annee">
              <p className="offset-2">2018</p>
              <p className="offset-3">2019</p>
              <p className="offset-3">2020</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
