import React from 'react'
import styles from './Content.module.css'

// eslint-disable-next-line @typescript-eslint/ban-types
export function Content(props: React.PropsWithChildren<{}>) {
  const { children } = props

  return (
    <div className={styles.root}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
