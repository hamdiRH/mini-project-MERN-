import React, { Component } from "react";
import "./forum.css";

import { connect } from "react-redux";
import { TextField } from "@material-ui/core";

class forum extends Component {
  render() {
    return (
      <div>
        <div class="grid">
          <main class="main">
            <article id="card">
              <h1 class="card__heading">
                Codepen | <span class="rom">{this.props.id}</span>
              </h1>
              <p class="card__excerpt">
                And ever has it been known that love knows not its own depth
                until the hour of separation.
              </p>
            </article>

            <article id="card">
              <p class="card__excerpt">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png"
                  alt="Avatar"
                  class="avatar mr-3"
                  style={{
                    verticalAlign: "middle",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%"
                  }}
                />
                And ever has it been known that love knows not its own depth
                until the hour of separation.
              </p>
            </article>
            <article id="card">
              <p class="card__excerpt">
                <img
                  src="http://www.sclance.com/pngs/avatar-icon-png/avatar_icon_png_71275.png"
                  alt="Avatar"
                  class="avatar mr-3"
                  style={{
                    verticalAlign: "middle",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%"
                  }}
                />
                And ever has it been known that love knows not its own depth
                until the hour of separation.
              </p>
            </article>
            <article id="card">
              <p class="card__excerpt">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png"
                  alt="Avatar"
                  class="avatar mr-3"
                  style={{
                    verticalAlign: "middle",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%"
                  }}
                />
                And ever has it been known that love knows not its own depth
                until the hour of separation.
              </p>
            </article>

            <article id="card">
              <h1 class="card__heading text-center mb-5">Add Comment</h1>

              <TextField />
            </article>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  null
)(forum);
