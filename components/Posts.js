import Post from "./Post"

const posts = [
    {
        id: '123',
        username: 'Deki',
        userImg: '../../dejanStojkic.jpg',
        img: '../../pecenica.jpg',
        caption: 'U sumama i gorama !!!'
    },
    {
        id: '222',
        username: 'Deki',
        userImg: '../../dejanStojkic.jpg',
        img: '../../dejanStojkic.jpg',
        caption: 'Subscribe and destroy the like button for YT algoritham'
    },
    {
        id: '333',
        username: 'Treci neko',
        userImg: 'https://links.papareact.com/3ke',
        img: '../../dejanStojkic.jpg',
        caption: 'Subscribe and destroy the like button for YT algoritham'
    }
]

function Posts() {
    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption} />
            ) )}
        </div>
    )
}

export default Posts
