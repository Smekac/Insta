import MiniProfil from "./MiniProfil"
import Posts from "./Posts"
import Stories from "./Stories"
import Suggesstion from "./Suggesstion"

function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
        xl:grid-cols-3 xl:max-w-6xl mx-auto">
            {/* Left side */}
            <section className="col-span-2"> 
                <Stories/>
                {/* Stories */}
                <Posts/>
                {/* Posts */}
            </section>
            {/* Right     */}
            <section className="hidden xl:inline-grid
            md:col-span-1"> 
            <div className="fixed top-20"> 
                {/* Mini profils     */}
                <MiniProfil />
                {/* Suggestions     */}
                <Suggesstion />
            </div>
            </section>
        </main>
    )
}

export default Feed
