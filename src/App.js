import React, { Component } from "react";
import configureStore from "./store";
import { Provider as ReduxProvider } from "react-redux";

// App.js controls routes
import Routes from "./routes/Routes.js";

class App extends Component {
  render() {
    const reduxStore = configureStore;

    return (
      <ReduxProvider store={reduxStore}>
        <main>
          <Routes />
        </main>
      </ReduxProvider>
    );
  }
}

export default App;
