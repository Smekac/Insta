

function Story({img,username}) {
    return (
        <div>
            <img src={img} alt='profile pic' className="object-contain border-2 rounded-full border-red-500 w-10
            cursor-pointer hover:scale-125
            transition-all duration-150 ease-out" />
            <p className="text-xs w-14 truncate  text-center" >{username}</p>
        </div>
    )
}

export default Story
