import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">Tailwind in React Js</h1>
        <div className="bg-gray-700 p-4 rounded-lg mb-6">
          <p className="text-gray-300 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
          </p>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
          Click me
        </button>
      </div>
    </div>
  );
}

export default App;