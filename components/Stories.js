import faker from "faker"
import {useState, useEffect} from 'react'
import Story from "./Story";

function Stories() {
    const [suggestions, setSuggestions] =useState([]) 

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i)=>({ 
            ...faker.helpers.contextualCard(),  
            id:i
        }));
        setSuggestions(suggestions)
    }, []);

    return (
        <div className="flex justify-center items-center p-6  mt-8
         border-gray-200 overflow-x-scroll  space-x-2 
         scrollbar-thin scrollbar-thumb-black">
            {suggestions.map( (profile) => (
                <Story key={profile.id}
                username={profile.username}
                img={profile.avatar}
                />
               ) )}
        </div>
    )
}

export default Stories
