import React, { FC } from 'react'
import { IMenuOption } from '../../../common/interfaces'
import { LinkButton } from '../../atoms'

interface IProps {
    options: IMenuOption[]
}

export const HeaderMenu: FC<IProps> = ({ options }) => {
    return (
        <ul className="relative h-full flex items-center space-x-3">
            {
                options.map((opt, ix) => (
                    <li key={ix.toString()}>
                        <LinkButton name={opt.name} to={opt.url} color="primary">
                            {opt.name}
                        </LinkButton>
                    </li>
                ))
            }
        </ul>
    )
}
