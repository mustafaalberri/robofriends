import React, {Component} from "react";
import 'tachyons';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        const {hasError} = this.state;
        return hasError?
                    <h1 className="tc ma5"> Oooops ... looks like we have an error.</h1>:
                    this.props.children;
    }
}

export default ErrorBoundary;