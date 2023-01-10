import Image from "next/image"
import { isLink } from "../utils"

interface State {
  question: string
  options: string[]
  answer: string
}

function stringToId(str: string): string {
  return str.toLocaleLowerCase().split('').map(l => l === ' ' ? '-' : l).join('')
}

export default function Question({ state, validated, selectedOption, setSelectedOption }: {state: State | null, validated: boolean, selectedOption: string, setSelectedOption: Function}) {


  function handleInputClick(option: string) {
    console.log(option)
    console.log(validated)
    setSelectedOption(option)
  }

  if (state == null) return <></>

  const isImageQuestion = isLink(state.options[0])

  return (
    <div>
      <h1 className='text-center font-bold text-4xl mb-6 text-white'>{state.question}</h1>
      <div className='flex justify-center mb-6'>
        <div className={`flex ${isImageQuestion ? 'flex-row' : 'flex-col'}`}>
        {state?.options.map((option, i) => {
          return <div className={`flex text-2xl ${validated && option == state.answer ? 'bg-green-500' : validated && option == selectedOption ? 'bg-red-500' : 'bg-transparent'}`} key={i}>
            <div className='p-1'><input className='h-6 w-6 orange' type='radio' disabled={validated} checked={selectedOption == '' ? false : undefined} onClick={() => handleInputClick(option)} name='option' id={stringToId(option)} /></div>
            <label htmlFor={stringToId(option)} className='relative block'>
              {
                isImageQuestion ? <Image src={option} alt='Writer' width={200} height={200} className='pointer-events-none select-none p-3'></Image> :
                <>{option}</>
              }
              
            </label>
          </div>
        })}
        </div>
      </div>
    </div>
  )
}