import { IElementComponentProps } from '../../../common/interfaces';

export interface IProps extends IElementComponentProps {
    onClick: (e?:any ) => void;
    name: string;
}