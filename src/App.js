import React, { PureComponent } from "react";
import Header from "./Components/Header";
import SearchInput from "./Components/SearchInput";
import EmojiResults from "./Components/EmojiResults";
import filterEmoji from "./Components/filterEmoji";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = value => {
    this.setState({
      filteredEmoji: filterEmoji(value, 20)
    });
  };

  render() {
    return (
      <div data-testid="app-component">
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}
