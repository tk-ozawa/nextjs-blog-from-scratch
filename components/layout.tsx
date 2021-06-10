import { FunctionComponent, ReactNode } from 'react'
import Head from 'next/head'
import { NextRouter } from 'next/router'
import { HeadDefault } from './head'
import { HeaderProfile } from './header'
import { BackToHomeBtn, TagBtn, BackToPreviousBtn } from './button'
import styles from './layout.module.css'

export const siteTitle = 'Fragment'

interface Props {
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

// tips: https://github.com/vercel/next.js/issues/5964
export const TitleWithSiteTitle: FunctionComponent<Props> = ({ children }) => (
  <Head>
    <title>
      {children} - {siteTitle}
    </title>
  </Head>
)

export const HomePageLayout: FunctionComponent<Props> = ({ children }) => (
  <Container>
    <HeaderProfile />
    <main>{children}</main>
  </Container>
)

export const PostPageLayout: FunctionComponent<PostProps> = ({
  children,
  router,
}) => (
  <Container>
    <main>{children}</main>
    <div className={styles.backToHome}>
      <BackToPreviousBtn router={router} />
    </div>
  </Container>
)

export const TagPageLayout: FunctionComponent<Props> = ({ children }) => (
  <Container>
    <HeaderProfile />
    <main>{children}</main>
    <div className={styles.backToHome}>
      <BackToHomeBtn />
    </div>
  </Container>
)

export const ErrorPageLayout: FunctionComponent<Props> = ({ children }) => (
  <Container>
    <HeaderProfile />
    <main>{children}</main>
    <div className={styles.backToHome}>
      <BackToHomeBtn />
    </div>
  </Container>
)

export const TagsLayout: FunctionComponent<{
  tags: string[]
  key: string
  className?: string
  tagClassName?: string
}> = ({ tags, key, className, tagClassName }) => (
  <ul className={className}>
    {tags.map((tag) => (
      <li key={`${String(key).replace(/_/g, '-')}_${tag}`}>
        <TagBtn className={tagClassName}>{tag}</TagBtn>
      </li>
    ))}
  </ul>
)
