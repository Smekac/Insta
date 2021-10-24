
function MiniProfil() {
    return (
        <div className="flex items-center  justify-between mt-14 ml-10">
            <img className="rounded-full border p-[2px]  h-16 w-16"
             src="../../dejanStojkic.jpg" alt="My profile" /> 
            <div className="flex-1 mx-4">
                <h2 className="font-bold" >Dejan Stojkic</h2>
                <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
            </div>
            <button className="text-blue-400 text-sm font-semibold"> Sing Out </button>
        </div>
    )
}

export default MiniProfil
