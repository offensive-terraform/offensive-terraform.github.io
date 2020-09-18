import React, { Component } from "react";
import { Text } from "grommet";
class ErrorBoundary extends Component {
  constructor(props) {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Text>Loading failed! Please reload.</Text>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
