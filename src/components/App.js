import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
        page: 2,
        per_page: 20,
      },
      headers: {
        Authorization: "Client-ID lanuL0x-bBalV0grDNHCf0Urps4p_1vBH9vPrRxJQ3g",
      },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "15px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
