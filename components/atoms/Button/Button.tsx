import React, { Component } from 'react'
import * as Types from './types'

export class Button extends Component<Types.IProps> {
    render() {
        const color = this.props.color || 'primary';
        return (
            <button {...this.props} className={[
                'btn',
                `bg-${color}-600`,
                `hover:bg-${color}-700`,
                `focus:ring-${color}-400`
            ].join(' ')}>
                {this.props.children}
            </button>
        )
    }
}
