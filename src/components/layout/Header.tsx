export default function Header() {

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <p className="text-lg font-bold">Ernest</p>
        <button className="flex-column">
            <p className="underline">log in</p>
            <div className="flex-column">
              <span className="w-3 h-[2px] bg-gray-400"></span>
              <span className="w-3 h-[2px] bg-gray-400"></span>
              <span className="w-3 h-[2px] bg-gray-400"></span>
            </div>
        </button>
    </header>
  )
}
