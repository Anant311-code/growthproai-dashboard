import { useState } from 'react';

const BusinessForm = ({ setData, setLoading }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('http://localhost:5000/business-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, location }),
    });
    const result = await res.json();
    setData({ ...result, name, location });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="text-left">
      <input
        type="text"
        placeholder="Business Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default BusinessForm;
