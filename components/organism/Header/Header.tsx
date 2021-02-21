import React, { Component } from 'react'
import { IMenuOption } from '../../../common/interfaces/menu-option.interface'
import { HeaderMenu, Logo } from '../../molecules'

interface IProps {
    mainMenuOpts: IMenuOption[]
}

export class Header extends Component<IProps> {
    render() {
        return (
            <div className="sticky flex z-10 top-0 h-14 py-4 w-full content-between">
                <div className="relative mr-8">
                    <Logo />
                </div>

                <div className="right-0">
                    <HeaderMenu options={this.props.mainMenuOpts} />
                </div>
            </div>
        )
    }
}
