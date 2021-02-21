import { withTranslation, WithTranslation } from 'next-i18next';
import React, { Component } from 'react';
import { IMenuOption } from '../../common/interfaces';
import { BoxedContainer } from '../containers';
import { Footer, Header } from '../organism';

export const Layout = withTranslation('common')(
    class Layout extends Component<WithTranslation> {
        render() {
            const mainMenuOpts: IMenuOption[] = [{
                name: this.props.t('menu_home'),
                url: '/'
            }];

            return (
                <>
                    <div className="min-h-screen bg-white overflow-hidden">
                        <BoxedContainer>
                            <Header mainMenuOpts={mainMenuOpts} />
                        </BoxedContainer>
                        <main className="h-full pb-20">{this.props.children}</main>
                    </div>
                    <Footer />
                </>
            )
        }
    });