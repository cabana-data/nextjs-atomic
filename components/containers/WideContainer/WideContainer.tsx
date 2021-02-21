import { Component } from 'react';

export class WideContainer extends Component {
    render() {
        return <div className="container z-10 max-w-screen-md xl:max-w-screen-md mx-auto">
            {this.props.children}
        </div>
    }
}   
