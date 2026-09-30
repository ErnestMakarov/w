import { useState } from "react"

export default function RandomFacts() {
  const [fact, setFact] = useState('');
  
async function HandleFact() {
  try {
    const response = await fetch('https://catfact.ninja/fact');
    
    if (!response.ok) {
      throw new Error('Failed to fetch fact');
    }
    const data = await response.json();

    setFact(data.fact)
  } catch (error) {
    console.log(error)
  }
}

  return (
    <section className="text-center">
        <p className="mt-10">random fact about cat:</p>
        <p className="mt-5 mb-5 font-bold ">{fact}</p>
        <button className="mb-5 bg-green-700 text-white p-2 rounded-xl cursor-pointer select-none" onClick={HandleFact}>Get random fact</button>
    </section>
  )
}
