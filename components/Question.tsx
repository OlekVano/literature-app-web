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
      <h1 className='text-center font-bold text-4xl max-s:text-3xl mb-6 text-white'>{state.question}</h1>
      <div className='flex justify-center mb-6'>
        <div className={`flex ${!isImageQuestion ? 'flex-col' : 'flex-wrap w-full'}`}>
        {state?.options.map((option, i) => {
          return (
            <div className={`p-1 md:p-2 ${isImageQuestion ? 'w-1/2 md:w-1/4 aspect-square' : ''}`} key={i}>
              <div className={`w-full h-full flex ${validated && option == state.answer ? 'bg-green-500' : validated && option == selectedOption ? 'bg-red-500' : 'bg-transparent'}`}>
              <div className='p-1'>
                <input className='h-6 w-6 orange' type='radio' disabled={validated} checked={selectedOption == '' ? false : undefined} onClick={() => handleInputClick(option)} name='option' id={stringToId(option)} />
              </div>
              <label htmlFor={stringToId(option)} className='relative block flex-1 s:text-2xl text-xl'>
                {
                  isImageQuestion ? <Image src={option} alt='Writer' fill className='pointer-events-none select-none p-3 object-cover'></Image> :
                  <>{option}</>
                }

              </label>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}