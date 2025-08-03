import DashBoard from './Dashboard';

function App() {
  return (
    <>
      <div className="text-center mb-8 py-6 bg-white shadow-sm">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          🍽️ Restaurant Dashboard
        </h1>
        <p className="text-gray-600">
          Real-time analytics and insights from your restaurant data
        </p>
      </div>
      <DashBoard />
    </>
  )
}

export default App
