const BusinessCard = ({ data, setData }) => {
  const regenerateHeadline = async () => {
    const res = await fetch(
      `http://localhost:5000/regenerate-headline?name=${data.name}&location=${data.location}`
    );
    const result = await res.json();
    setData((prev) => ({ ...prev, headline: result.headline }));
  };

  return (
    <div className="bg-white mt-6 p-4 rounded shadow w-full max-w-md text-center">
      <h2 className="text-xl font-bold">{data.name} ({data.location})</h2>
      <p className="text-yellow-500 mt-2">Rating: {data.rating}★</p>
      <p>Reviews: {data.reviews}</p>
      <p className="mt-2 italic">"{data.headline}"</p>
      <button
        onClick={regenerateHeadline}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Regenerate SEO Headline
      </button>
    </div>
  );
};

export default BusinessCard;
