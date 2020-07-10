import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "shards-react";

class Navbar extends Component {
  state = {
    presentationActive: false,
    competenceActive: false,
    experienceActive: false,
    realisationActive: false,
    activePage: "presentation",
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

  render() {
    // const {props}=this;
    // console.log("competence ", this.state.competenceActive);
    // console.log("presentation ", this.state.presentationActive);
    // console.log(this.state.activePage);
    // console.log("••••••••••••••••••••••••••••••••••••••••••");
    return (
      <Nav pills className="col-12 p-0 m-0">
        <NavItem className="col-3">
          <NavLink
            active={this.state.presentationActive}
            onClick={(e) => this.handleChangePage("Presentation")}
            href="#"
          >
            Présentation
          </NavLink>
        </NavItem>
        <NavItem className="col-3">
          <NavLink
            active={this.state.competenceActive}
            onClick={(e) => this.handleChangePage("Competence")}
            href="#"
          >
            Compétence
          </NavLink>
        </NavItem>
        <NavItem className="col-3">
          <NavLink
            active={this.state.experienceActive}
            onClick={(e) => this.handleChangePage("Experience")}
            href="#"
          >
            Expérience
          </NavLink>
        </NavItem>
        <NavItem className="col-3">
          <NavLink
            active={this.state.realisationActive}
            onClick={(e) => this.handleChangePage("Realisation")}
            href="#"
          >
            Réalisation
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default Navbar;
