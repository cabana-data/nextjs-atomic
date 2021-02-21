import React, { Component } from 'react'
import * as Types from './types'

export class LinkButton extends Component<Types.IProps> {
    render() {
        const color = this.props.color || 'primary';
        return (
            <a href={this.props.to} className={[
                `text-${color}-600`,
                `hover:text-${color}-700`,
                `focus:ring-${color}-400`
            ].join(' ')}>
                {this.props.children}
            </a>
        )
    }
}
