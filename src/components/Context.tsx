export default function Context() {
  const factors = [
    "Russia-Ukraine War",
    "Israel-Middle East Tensions",
    "Oil Prices in Iran",
    "Federal Reserve Rate",
    "Repo Rate"
  ];

  const suggestions = [
    "Buy low, sell high",
    "Diversify your portfolio",
    "Invest in companies with strong fundamentals",
    "Do not try to time the market",
    "Invest in companies with strong moats",
    "Be patient and disciplined",
    "During a market crash, buy more, Dont panic sell"
  ];

  return (
    <div className="container md:flex md:space-x-4 w-full">
      <div className="bg-gray-100 w-full p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Key Factors Affect Stock Market
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {factors.map((factor, index) => (
            <li key={index} className="text-md">
              {factor}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-100 w-full p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Investment Suggestions
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="text-md">
              {suggestion}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
