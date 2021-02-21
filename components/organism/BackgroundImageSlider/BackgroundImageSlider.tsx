import { Component } from 'react';
import { Heading, Paragraph } from '../../atoms';
import { BoxedContainer } from '../../containers';
import { BackgroundImage } from '../../molecules';

interface IProps {
    sourceURL: string;
    title: string;
    subtitle: string;
}

export class BackgroundImageSlider extends Component<IProps> {
    render() {
        return <div className="relative">
            <BackgroundImage sourceURL={this.props.sourceURL}>
                <BoxedContainer>
                    <div className="flex h-auto max-w-lg">
                        <div className="justify-items-auto items-baseline pb-52 pt-32">
                            <Heading type="h1" color="white">
                                {this.props.title}
                            </Heading>
                            <Paragraph textSize="2xl" color="white">{this.props.subtitle}</Paragraph>
                        </div>
                    </div>
                </BoxedContainer>
            </BackgroundImage>
        </div>
    }
}