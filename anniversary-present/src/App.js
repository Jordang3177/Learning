import React, { Component } from "react";
import Layout from './hoc/Layout/Layout';
import Present from './containers/Present/Present';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Present />
        </Layout>
      </div>
    );
  }
}

export default App;
