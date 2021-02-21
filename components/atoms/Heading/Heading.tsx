import React, { FC } from 'react'
import { IProps } from './types';

export const Heading: FC<IProps> = ({
    type, 
    color = 'primary',
    children,
    ...props
}:  IProps) => {
    props.className += `heading text-${color}`;
    const HeadingElement = React.createElement(type, props, children);
    return HeadingElement;
}

export default Heading
