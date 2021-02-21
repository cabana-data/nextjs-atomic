import React from 'react'
import { NextPage } from 'next'
import i18n from '../i18n';
import { SectionContainer } from '../components/containers'
import { BackgroundImageSlider } from '../components/organism'
import { Layout } from '../components/ui'
import {Button, Heading, Paragraph} from '../components/atoms'

const HomePage: NextPage<any> = () => {
  const onLoginClick = (e: any) => {
    e.preventDefault();
    alert('Clicked')
  }

  return (
    <Layout>
      <BackgroundImageSlider sourceURL="assets/img/temp/temp1.jpg" title="Layout bro!" subtitle="I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain," />

      <SectionContainer>
        <Heading type="h2">
          Awesome heading!
        </Heading>

        <Paragraph color="gray" colorLevel="400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>

        <Button color="primary" name="Login" onClick={onLoginClick}>
            Click me!
        </Button>
      </SectionContainer>
    </Layout >
  )
}

HomePage.getInitialProps = async () => {
  return {
    namespacesRequired: ['common'],
  }
}

export default i18n.withTranslation('common')(HomePage);