import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "../Styles/SearchInput.css";

export default class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    this.props.textChange(event.target.value); // Yalnızca `event.target.value` gönderiliyor
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input onChange={this.handleChange} data-testid={"search-input"} />
        </div>
      </div>
    );
  }
}
