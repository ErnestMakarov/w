import { useState } from "react"

export default function RandomFacts() {
  const [fact, setFact] = useState('');

async function HandleFact() {
  try {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();

    setFact(data.fact)
  } catch (error) {
    console.log(error)
  }
}

  return (
    <section className="text-center">
        <p className="mt-10">random facts:</p>
        <p className="font-bold ">{fact}</p>
        <button className="bg-green-700 text-white p-2 rounded-xl cursor-pointer" onClick={HandleFact}>Get random fact</button>
    </section>
  )
}
