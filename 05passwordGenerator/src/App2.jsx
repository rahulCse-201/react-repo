import React from 'react'

function App2() {




    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
                <h1 className="text-white text-center my-3">Password Generator</h1>

                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        className="outline-none w-full py-1 px-3"
                        placeholder="Password"
                        readOnly
                    />
                    <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
                        Copy
                    </button>
                </div>

                <div className="flex text-sm gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <input
                            type="range"
                            min={8}
                            max={20}
                            className="cursor-pointer"
                        />
                        <label>Length</label>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            id="numInput"
                        />
                        <label htmlFor="numInput">Numbers</label>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            id="charInput"
                        />
                        <label htmlFor="charInput">Characters</label>
                    </div>
                </div>
            </div>
        </>

    
  )
}

export default App2
