import { FunctionComponent, ReactNode } from 'react'
import Head from 'next/head'
import { NextRouter } from 'next/router'
import { HeadDefault } from './head'
import { TitleWithSiteTitle } from './title'
import { HeaderProfile } from './header'
import { BackToHomeBtn, BackToPreviousBtn } from './button'
import styles from './layout.module.css'

export const siteTitle = 'Fragment'

interface Props {
  children: ReactNode
  title: string
}

interface HomeProps {
  children: ReactNode
}

interface PostProps extends Props {
  router?: NextRouter
}

const Container: FunctionComponent = ({ children }) => (
  <div className={styles.container}>
    <HeadDefault />
    {children}
  </div>
)

export const HomePageLayout: FunctionComponent<HomeProps> = ({ children }) => (
  <Container>
    <HeaderProfile />
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <main>{children}</main>
  </Container>
)

export const PostPageLayout: FunctionComponent<PostProps> = ({
  children,
  title,
  router,
}) => (
  <Container>
    <TitleWithSiteTitle>{title}</TitleWithSiteTitle>
    <main>{children}</main>
    <div className={styles.backToHome}>
      <BackToPreviousBtn router={router} />
    </div>
  </Container>
)

export const TagPageLayout: FunctionComponent<Props> = ({
  children,
  title,
}) => (
  <Container>
    <TitleWithSiteTitle>{title}</TitleWithSiteTitle>
    <HeaderProfile />
    <main>{children}</main>
    <div className={styles.backToHome}>
      <BackToHomeBtn />
    </div>
  </Container>
)

export const ErrorPageLayout: FunctionComponent<Props> = ({
  children,
  title,
}) => (
  <Container>
    <TitleWithSiteTitle>{title}</TitleWithSiteTitle>
    <HeaderProfile />
    <main>{children}</main>
    <div className={styles.backToHome}>
      <BackToHomeBtn />
    </div>
  </Container>
)
