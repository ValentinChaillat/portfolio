import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "shards-react";
import Presentation from "../components/presentation";
import Competence from "../components/competence";
import Experience from "../components/experience";
import Realisation from "../components/realisation";

class Home extends Component {
  state = {
    presentationActive: true,
    competenceActive: false,
    experienceActive: false,
    realisationActive: false,
    activePage: "Realisation",
  };

  handleChangePage(e) {
    if (e === "Presentation") {
      this.setState({
        presentationActive: true,
        competenceActive: false,
        experienceActive: false,
        realisationActive: false,
        activePage: "Presentation",
      });
    }
    if (e === "Competence") {
      this.setState({
        presentationActive: false,
        competenceActive: true,
        experienceActive: false,
        realisationActive: false,
        activePage: "Competence",
      });
    }
    if (e === "Experience") {
      this.setState({
        presentationActive: false,
        competenceActive: false,
        experienceActive: true,
        realisationActive: false,
        activePage: "Experience",
      });
    }
    if (e === "Realisation") {
      this.setState({
        presentationActive: false,
        competenceActive: false,
        experienceActive: false,
        realisationActive: true,
        activePage: "Realisation",
      });
    }
  }
  handleChangePageGauche() {
    if (this.state.activePage === "Presentation") {
      this.setState({
        presentationActive: false,
        realisationActive: true,
        activePage: "Realisation",
      });
    }
    if (this.state.activePage === "Competence") {
      this.setState({
        presentationActive: true,
        competenceActive: false,
        activePage: "Presentation",
      });
    }
    if (this.state.activePage === "Experience") {
      this.setState({
        experienceActive: false,
        competenceActive: true,
        activePage: "Competence",
      });
    }
    if (this.state.activePage === "Realisation") {
      this.setState({
        realisationActive: false,
        experienceActive: true,
        activePage: "Experience",
      });
    }
  }
  handleChangePageDroite() {
    if (this.state.activePage === "Presentation") {
      this.setState({
        presentationActive: false,
        competenceActive: true,
        activePage: "Competence",
      });
    }
    if (this.state.activePage === "Competence") {
      this.setState({
        experienceActive: true,
        competenceActive: false,
        activePage: "Experience",
      });
    }
    if (this.state.activePage === "Experience") {
      this.setState({
        experienceActive: false,
        realisationActive: true,
        activePage: "Realisation",
      });
    }
    if (this.state.activePage === "Realisation") {
      this.setState({
        realisationActive: false,
        presentationActive: true,
        activePage: "Presentation",
      });
    }
  }

  render() {
    // const {props}=this;
    // console.log("competence ", this.state.competenceActive);
    // console.log("presentation ", this.state.presentationActive);
    // console.log(this.state.activePage);
    // console.log("••••••••••••••••••••••••••••••••••••••••••");
    return (
      <div className="app col-12 row p-0 m-0">
        <button
          className="bordure col-1 p-0 m-0"
          onClick={(e) => this.handleChangePageGauche()}
        >
          <img alt="fleche de gauche" src="../img/fleche-gauche.png"></img>
        </button>
        <div className="middle col-10 p-0 m-0 row">
          <div className="page col-12 m-0 p-0">
            {this.state.activePage === "Presentation" ? (
              <Presentation />
            ) : this.state.activePage === "Competence" ? (
              <Competence />
            ) : this.state.activePage === "Experience" ? (
              <Experience />
            ) : this.state.activePage === "Realisation" ? (
              <Realisation />
            ) : (
              "Portfolio de Valentin Chaillat"
            )}
          </div>
          <div className="navigation col-10 m-0 p-0">
            <Nav pills className="col-12 p-0 m-0 navPills">
              <NavItem className="col-3 p-0 m-0 navItem">
                <NavLink
                  active={this.state.presentationActive}
                  onClick={(e) => this.handleChangePage("Presentation")}
                  href="#"
                  className="navContener col-12 p-0 m-0 row align-items-center"
                >
                  <div
                    className={
                      this.state.activePage === "Presentation"
                        ? "active col-12 p-0 m-0"
                        : "col-12 p-0 m-0"
                    }
                  ></div>
                  <p className="col-12 p-0 m-0 text-center">Présentation</p>
                </NavLink>
              </NavItem>
              <NavItem className="col-3 p-0 m-0 navItem">
                <NavLink
                  active={this.state.competenceActive}
                  onClick={(e) => this.handleChangePage("Competence")}
                  href="#"
                  className="navContener col-12 p-0 m-0 row align-items-center"
                >
                  <div
                    className={
                      this.state.activePage === "Competence"
                        ? "active col-12 p-0 m-0"
                        : "col-12 p-0 m-0"
                    }
                  ></div>
                  <p className="col-12 p-0 m-0 text-center">Compétence</p>
                </NavLink>
              </NavItem>
              <NavItem className="col-3 p-0 m-0 navItem">
                <NavLink
                  active={this.state.experienceActive}
                  onClick={(e) => this.handleChangePage("Experience")}
                  href="#"
                  className="navContener col-12 p-0 m-0 row align-items-center"
                >
                  <div
                    className={
                      this.state.activePage === "Experience"
                        ? "active col-12 p-0 m-0"
                        : "col-12 p-0 m-0"
                    }
                  ></div>
                  <p className="col-12 p-0 m-0 text-center">Expérience</p>
                </NavLink>
              </NavItem>
              <NavItem className="col-3 p-0 m-0 navItem">
                <NavLink
                  active={this.state.realisationActive}
                  onClick={(e) => this.handleChangePage("Realisation")}
                  href="#"
                  className="navContener col-12 p-0 m-0 row align-items-center"
                >
                  <div
                    className={
                      this.state.activePage === "Realisation"
                        ? "active col-12 p-0 m-0"
                        : "col-12 p-0 m-0"
                    }
                  ></div>
                  <p className="col-12 p-0 m-0 text-center">Réalisation</p>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>

        <button
          className="bordure col-1 p-0 m-0"
          onClick={(e) => this.handleChangePageDroite()}
        >
          {" "}
          <img alt="fleche de droite" src="../img/fleche-droite.png"></img>
        </button>
      </div>
    );
  }
}

export default Home;
