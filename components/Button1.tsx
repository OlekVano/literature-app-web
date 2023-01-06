import styles from './Button1.module.scss'
import Link from 'next/link'
import { MouseEventHandler } from 'react'

interface Props {
  text: string
  func?: Function
  link?: string
  ariaLabel?: string
  ariaDescribedby?: string

}

export default function Button1({ text, func, link, ariaLabel='', ariaDescribedby='' }: Props) {
  if (typeof func !== 'undefined') return <div className={styles.main} role='button' aria-label={ariaLabel} aria-describedby={ariaDescribedby} onClick={func as MouseEventHandler<HTMLDivElement>}>{text}</div>
  else if (typeof link !== 'undefined') return <Link href={link} className={styles.main}><div aria-label={ariaLabel} aria-describedby={ariaDescribedby}>{text}</div></Link>
  else return <>Error</>
}
