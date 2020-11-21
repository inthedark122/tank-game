import React from 'react'
import { GRiD_SIZE_ARR } from '../../constants'
import styles from './Grid.module.css'

export function Grid() {
  return (
    <div>
      {GRiD_SIZE_ARR.map((x) => (
        <div key={x} className={styles.row}>
          {GRiD_SIZE_ARR.map((y) => (
            <div key={y} className={styles.cell}></div>
          ))}
        </div>
      ))}
    </div>
  )
}
