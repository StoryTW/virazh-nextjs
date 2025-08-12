import React from 'react'
import styles from './BackgroundLights.module.scss'
import clsx from 'clsx'

export const BackgroundLights = () => {
  return (
    <>
      <div className={clsx(styles.sphere, styles.sphere_one)}/>
      <div className={clsx(styles.sphere, styles.sphere_two)}/>
    </>
  )
}
