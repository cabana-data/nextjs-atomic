import { Component } from 'react';

interface IProps {
    sourceURL: string;
}

export class BackgroundImage extends Component<IProps> {
    render() {
        return <div className="bg-cover bg-no-repeat shadow-md" style={{ backgroundImage: `url(${this.props.sourceURL})` }}>
            {this.props.children}
        </div>
    }
}