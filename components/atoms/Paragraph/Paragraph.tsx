import React, { Component } from 'react'
import * as Types from './types'

export class Paragraph extends Component<Types.IProps> {
    render() {
        const color = this.props.color || 'primary';
        const level = this.props.colorLevel || '';
        const textSize = this.props.textSize || 'normal' ;
        const textSizeClass = `text-${textSize}`;
        const textColor = `text-${color}${level ? `-${level}`: ''}`;
        return (
            <p className={[
                'paragraph',
                textColor,
                textSizeClass
            ].join(' ')}>
                {this.props.children}
            </p>
        )
    }
}
