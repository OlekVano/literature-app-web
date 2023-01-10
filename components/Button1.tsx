import Link from 'next/link'
import { MouseEventHandler } from 'react'

interface Props {
  text: string
  func?: Function
  link?: string
  ariaLabel?: string
  ariaDescribedby?: string

}

// This is not the exported button!
function Button({text, func, ariaLabel='', ariaDescribedby=''}: Omit<Props, 'link'>) {
  return <div className='bg-orange cursor-pointer rounded-md shadow-lg text-center text-2xl font-medium p-3 m-1 duration-500 ease-in-out no-underline text-black select-none hover:pl-9 hover:pr-9' role='button' aria-label={ariaLabel} aria-describedby={ariaDescribedby} onClick={func as MouseEventHandler<HTMLDivElement>}>{text}</div>
}

export default function Button1({ text, func=() => {}, link='', ariaLabel='', ariaDescribedby='' }: Props) {
  if (link !== '') return <Link href={link}><Button text={text} func={func} ariaLabel={ariaLabel} ariaDescribedby={ariaDescribedby} /></Link>
  return <Button text={text} func={func} ariaLabel={ariaLabel} ariaDescribedby={ariaDescribedby} />
}
