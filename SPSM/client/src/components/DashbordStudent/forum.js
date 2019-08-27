import React, { Component } from "react";
import "./forum.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class forum extends Component {
  render() {
    const par = "xD";

    return (
      <div>
        <div class="grid">
          <main class="main">
            <inpout
              type="button"
              className="btn float-right"
              style={{
                width: "200px",
                backgroundColor: "#dc006c",
                opacity: ".8",
                color: "white"
              }}
            >
              Add Post{" "}
            </inpout>
            <article id="card">
              <h1 class="card__heading">
                Codepen | <span class="rom">Romance</span>
              </h1>
              <p class="card__excerpt">
                And ever has it been known that love knows not its own depth
                until the hour of separation.
              </p>
              <Link to={`/StudentForumPost/${par}`}>
                <strong>
                  <small>Read More &raquo;</small>
                </strong>
              </Link>
            </article>
            <article id="card">
              <h1 class="card__heading">
                Codepen | <span class="rom">Romance</span>
              </h1>
              <p class="card__excerpt">
                And ever has it been known that love knows not its own depth
                until the hour of separation.
              </p>
              <strong>
                <small>Read More &raquo;</small>
              </strong>
            </article>
            <article id="card">
              <h1 class="card__heading">
                Codepen | <span class="rom">Romance</span>
              </h1>
              <p class="card__excerpt">
                And ever has it been known that love knows not its own depth
                until the hour of separation.
              </p>
              <strong>
                <small>Read More &raquo;</small>
              </strong>
            </article>
            <article id="card">
              <h1 class="card__heading">
                Codepen | <span class="rom">Romance</span>
              </h1>
              <p class="card__excerpt">
                And ever has it been known that love knows not its own depth
                until the hour of separation.
              </p>
              <strong>
                <small>Read More &raquo;</small>
              </strong>
            </article>
            <article id="card">
              <h1 class="card__heading">
                Codepen | <span class="rom">Romance</span>
              </h1>
              <p class="card__excerpt">
                And ever has it been known that love knows not its own depth
                until the hour of separation.
              </p>
              <strong>
                <small>Read More &raquo;</small>
              </strong>
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
