import React, { Component } from "react";
import Layout from './hoc/Layout/Layout';
import Present from './containers/Present/Present';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Present />
        </Layout>
      </div>
    );
  }
}

export default App;
