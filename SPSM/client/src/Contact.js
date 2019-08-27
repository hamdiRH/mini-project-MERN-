import React from "react";
import "./contact.css";

class Contact extends React.Component {
  state = {
    envelop: false
  };

  render() {
    return (
      <div className="frame">
        <div
          id="button_open_envelope"
          onClick={() => {
            this.setState({ envelop: true });
          }}
        >
          Email me
        </div>
        <div className={this.state.envelop ? "message pull" : "message"}>
          <form>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" Name* "
              required
            />

            <input
              type="email"
              name="email"
              id="email"
              placeholder=" Email* "
              required
              pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$"
            />

            <input
              type="text"
              name="phone"
              id="phone"
              placeholder=" Phone (optional)"
            />

            <textarea
              name="message"
              id="messarea"
              placeholder=" Message* "
              required
            />

            <input
              type="text"
              name="address"
              id="address"
              style={{ display: "none" }}
            />
            <input
              type="button"
              value="Send"
              id="send"
              onClick={() => {
                this.setState({ envelop: false });
              }}
            />
          </form>
        </div>
        <div className="bottom" />
        <div className="left" />
        <div className="right" />
        <div className={this.state.envelop ? "top open" : "top"} />
      </div>
    );
  }
}

export default Contact;
