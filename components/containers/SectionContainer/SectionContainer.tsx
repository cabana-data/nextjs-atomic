import { Component } from 'react';
import { BoxedContainer } from '../BoxedContainer';

export class SectionContainer extends Component {
    render() {
        return (
            <div className="relative py-24">
                <BoxedContainer>
                    {this.props.children}
                </BoxedContainer>
            </div>
        )
    }
}