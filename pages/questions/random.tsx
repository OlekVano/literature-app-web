import Head from 'next/head'
import { useEffect, useState } from 'react'
import Button1 from '../../components/Button1'
import Question from '../../components/Question'

interface State {
  question: string
  options: string[]
  answer: string
}

export default function Random() {
  const [state, setState]: [State | null, Function] = useState(null)
  const [validated, setValidated] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  async function getQuestionFromApi() {
    const API_URL = process.env.API_URL
    const res = await fetch(`${API_URL}/questions/random`)
    return res.json()
  }

  async function newQuestion() {
    setState(await getQuestionFromApi())
    setValidated(false)
    setSelectedOption('')
  }

  useEffect(() => {
    console.log('NEW QUESTION')
    newQuestion()
  }, [])

  return (
    <>
    <Head>
      <title>Перевір свої знання з літератури!</title>
      <meta name='description' content='Перевір свої знання з літератури!' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <main className='min-h-screen flex flex-col justify-center items-center pt-7 pb-7'>
      <Question state={state} validated={validated} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <Button1 text={validated ? 'Наступне' : 'Перевірити'} func={validated ? newQuestion : () => setValidated(true)} />
    </main>
    </>
  )
}
