import { Component } from 'react';

export class BoxedContainer extends Component {
    render() {
        return <div className="max-w-screen-md xl:max-w-screen- mx-auto h-auto">
            {this.props.children}
        </div>
    }
}   
