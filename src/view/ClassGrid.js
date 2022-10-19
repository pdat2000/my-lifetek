import Header from "./Header";
import Container from "./Container";
import React, { PureComponent } from "react";

class ClassGrid extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Container></Container>
      </React.Fragment>
    );
  }
}
export default ClassGrid;
