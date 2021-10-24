import {BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, PaperAirplaneIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconField  } from '@heroicons/react/solid'


function Post({
    username,
    userImg,
    img,
    caption}) {
    return (
        <div className='bg-white border rounded-sm my-7 '>
            <div className='flex items-center p-5'>
               <img src={userImg} alt="User image" 
               className='rounded-full h-10' />  
               <p className='flex-1'> {username} </p>    
               <DotsHorizontalIcon className='h-5' />          
            </div>
            <div> <img src={img} alt="User image" className='object-cover w-full' /> </div>
            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4">
                <HeartIconField className="btn" />
                <ChatIcon className="btn" />
                <PaperAirplaneIcon className="btn" />
                </div>           
            <BookmarkIcon className="btn" />
            </div>
            <p className="p-5 truncate"> 
            <span className="font-bold mr-1">{username}</span>
            {caption}
            </p> 

            {/* comments */}
            

           <form className="flex items-center p-4">
               <EmojiHappyIcon className="h-7" />
               <input type="text" 
               placeholder="Add comment ..."
               className="border-none flex-1 focus:ring-0
                outline-none" />
               <button className="text-blue-400 font-semibold" > Post </button>
           </form>

        </div>
    )
}

export default Post
