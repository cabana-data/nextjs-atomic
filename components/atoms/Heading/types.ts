import { TColor, THeading } from '../../../common/types';

export interface IProps extends React.HTMLProps<HTMLHeadingElement> {
    type: THeading;
    color?: TColor;
}