import { useState } from 'react';
import BusinessForm from './components/BusinessForm';
import BusinessCard from './components/BusinessCard';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-6">Local Business Dashboard</h1>

        <BusinessForm setData={setData} setLoading={setLoading} />

        {loading && <p className="mt-4 text-blue-600">Loading...</p>}

        {data && !loading && (
          <div className="mt-6">
            <BusinessCard data={data} setData={setData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
