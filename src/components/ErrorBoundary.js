import React from 'react';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      message: null,
    };
  }

  static getDerivedStateFromError(error) {
     return { hasError: true, message: error.message };
  }



  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong {this.state.message}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
