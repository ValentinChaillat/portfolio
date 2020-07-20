import React, { Component } from "react";
import { FormInput, FormTextarea } from "shards-react";
import Recaptcha from "react-recaptcha";
import axios from "axios";

const API_PATH = "http://chaillat.fr/form.php";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameIsValid: false,
      nameIsInvalid: false,
      email: "",
      emailIsValid: false,
      emailIsInvalid: false,
      message: "",
      messageIsValid: false,
      messageIsInvalid: false,
      captchaChanged: false,
      captchaLoaded: false,
    };
  }

  captchaChanged() {
    this.setState({ captchaChanged: true });
  }

  recaptchaLoaded() {
    this.setState({ captchaLoaded: true });
  }

  handleChangeNameValid(validité) {
    if (validité === "valid") {
      this.setState({ nameIsValid: true, nameIsInvalid: false });
    }
    if (validité === "invalid") {
      this.setState({ nameIsValid: false, nameIsInvalid: true });
    }
  }
  handleChangeEmailValid(validité) {
    if (validité === "valid") {
      this.setState({ emailIsValid: true, emailIsInvalid: false });
    }
    if (validité === "invalid") {
      this.setState({ emailIsValid: false, emailIsInvalid: true });
    }
  }
  handleChangeMessageValid(validité) {
    if (validité === "valid") {
      this.setState({ messageIsValid: true, messageIsInvalid: false });
    }
    if (validité === "invalid") {
      this.setState({ messageIsValid: false, messageIsInvalid: true });
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.name && this.state.email && this.state.message) {
      if (
        (this.state.captchaChanged && this.state.captchaLoaded) ||
        !this.state.captchaLoaded
      ) {
        axios({
          method: "post",
          url: `${API_PATH}`,
          headers: { "content-type": "application/json" },
          data: this.state,
        })
          .then((result) => {
            this.setState({
              mailSent: result.data.sent,
            });
            this.state.mailSent === true
              ? alert("E-mail envoyé")
              : alert("Échec de l'envoi du mail");
          })
          .catch((error) => this.setState({ error: error.message }));
        this.setState({
          name: "",
          email: "",
          message: "",
          captchaChanged: false,
          captchaLoaded: false,
        });
        console.log("captcha loaded");
      } else {
        alert("C3PO ? C'est toi?");
      }
    } else {
      if (this.state.name === undefined) {
        this.handleChangeNameValid("invalid");
      }
      if (this.state.email === undefined) {
        this.handleChangeEmailValid("invalid");
      }
      if (this.state.message === undefined) {
        this.handleChangeMessageValid("invalid");
      }
      alert("Il reste des champs à compléter.");
    }
  };

  render() {
    return (
      <div className="contact">
        <h1>Contact</h1>
        <p>Un projet ou une question ? vous pouvez me contacter par mail :</p>
        <form className="col-12 row">
          <div className="col-8 p-0 pb-2 offset-2">
            <label className="col-12 p-0 m-0">Votre nom</label>
            <FormInput
              valid={this.state.nameIsValid}
              invalid={this.state.nameIsInvalid}
              className="col-12"
              type="text"
              id="name"
              name="firstname"
              value={this.state.name}
              onChange={(e) => (
                this.setState({ name: e.target.value }),
                e.target.value.length < 1
                  ? this.handleChangeNameValid("invalid")
                  : this.handleChangeNameValid("valid")
              )}
            />
          </div>
          <div className="col-8 p-0 pb-2  offset-2">
            <label className="col-12 p-0 m-0">Votre Email</label>
            <FormInput
              valid={this.state.emailIsValid}
              invalid={this.state.emailIsInvalid}
              className="col-12"
              type="text"
              id="email"
              name="Email"
              value={this.state.email}
              onChange={(e) => (
                this.setState({ email: e.target.value }),
                e.target.value.length < 1
                  ? this.handleChangeEmailValid("invalid")
                  : this.handleChangeEmailValid("valid")
              )}
            />
          </div>
          <div className="col-8 p-0 pb-2 offset-2">
            <label className="col-12 p-0 m-0">Votre message</label>
            <FormTextarea
              valid={this.state.messageIsValid}
              invalid={this.state.messageIsInvalid}
              className="col-12 message"
              type="text"
              id="message"
              name="Message"
              value={this.state.message}
              onChange={(e) => (
                this.setState({ message: e.target.value }),
                e.target.value.length < 1
                  ? this.handleChangeMessageValid("invalid")
                  : this.handleChangeMessageValid("valid")
              )}
            />
          </div>
        </form>

        <Recaptcha
          sitekey="6LeRerIZAAAAAAXToeAGyld2lHma4dVXrVyJVXzf"
          verifyCallback={() => this.captchaChanged()}
          onloadCallback={() => this.recaptchaLoaded()}
          className="offset-md-3 offset-0 col-6 p-0"
        />

        <input
          className="col-6 offset-3 col-md-4 offset-md-4 boutton"
          type="submit"
          onClick={(e) => this.handleFormSubmit(e)}
          value="ENVOYER"
        />
        <p>
          Ou simplement me laisser un message au <span>06 87 14 94 11</span>
        </p>
        <div className="link">
          <a href="https://www.linkedin.com/in/valentin-chaillat/" className="">
            <img alt="icone linkedin" src="../img/linkedin.png"></img>
          </a>
          <a href="https://github.com/ValentinChaillat" className="">
            <img alt="icone github" src="../img/github.png"></img>
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
