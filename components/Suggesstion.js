import { useEffect, useState } from "react";
import faker from "faker";

function Suggesstion() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => {
      return { ...faker.helpers.contextualCard(), id: i };
    });
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="ml-10 mt-10">
      <div className="mb-4   flex justify-between">
        <div className="font-bold text-gray-400 text-sm">
          Suggestions for you
        </div>
        <div className="font-semibold text-gray-600"> See all </div>
      </div>
      <div>
        {suggestions.map((profile) => (
          <div
            key={profile.id}
            className="flex items-center justify-between mt-3"
          >
            <img
              src={profile.avatar}
              alt="avatar"
              className="h-10 w-10 rounded-full border p-[2]"
            />
            <div className="flex-1">
               <div className="font-semibold text-md"> {profile.username} </div> 
                <div className="text-xs"> Work at: {profile.company.name} </div>
            </div>
            <button className='font-semibold text-blue-400'> Follow </button>
          </div>
        ))}
      </div>
      {/* <img
          src={img}
          alt="profile pic"
          className="object-contain border-2 rounded-full border-red-500 w-10
                cursor-pointer hover:scale-125
                transition-all duration-150 ease-out"
        />
      </div>
      <div className="flex-1 mx-4">
        <h2 className="font-bold"> Neko novii</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">
        Add someone
      </button> */}
    </div>
  );
}

export default Suggesstion;
