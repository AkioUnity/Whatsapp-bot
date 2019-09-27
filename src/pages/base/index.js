import React, { Component } from "react";
import {
  Title,Footer
} from "native-base";

class AdFooter extends Component {
  render() {
    return (
      <Footer >
        <Title style={{paddingTop:10}}>Your AD Here</Title>
      </Footer>
    );
  }
}

export default AdFooter;
