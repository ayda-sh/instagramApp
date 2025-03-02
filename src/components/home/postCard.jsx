import { useState } from "react";
import { IoIosMore } from "react-icons/io";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link> 


const PostCard = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(741);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };
  
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

    return (
     
      <div class="max-w-lg mx-auto bg-white rounded-lg shadow-md border-gray-200 rounded-2xl overflow-hidden px-6"> 
      <div class="flex items-center justify-between px-4 ">
      <div class="mt-2 flex items-center gap-x-[8px]"> 
            <img src="/public/Flower_stock_photo.jpg" class="size-8  rounded-full" alt="" /> 
            <div class="flex gap-x-1">
              <span class="text-[14px] text-[#262626] ">lewishamilton </span>  
              <img src="/public/blue.svg" alt="" /></div>
            <span class="text-gray-500 text-sm">.5h</span>  
        </div> 
        
        <button>
          <img src="/public/more.svg" alt="more" />
        </button>
      </div>
      
    <div class="p-4">  
        <img class="w-full h-auto rounded" src="/public/Flower_stock_photo.jpg" alt="Image description"/>  

        <div class="flex flex-col gap-y-3 items-start mt-[10px]"> 
          <span class="flex gap-x-4">
            <img class="size-5" onClick={handleLike} src={isLiked ? "/public/reed-removebg-preview.png" : "/public/heart.svg"}
                alt="like"/>
            <img class="size-5"  src="/public/comment.svg" alt="comment" />
          </span>
          <span>
            <p class="font-[8px] text-[#262626] tracking-tight">{likes} likes</p>
          </span>
        </div>
        <div class="flex gap-x-1">
          <span class="font-medium text-[#262626] tracking-tight">lewishamilton</span>
          <p class="text-[#262626] font-[12px] text-ellipsis line-clamp-1 tracking-tight">Parabéns Ayrton, minha inspiração sempre 🇧🇷</p>
        </div>

        <div class="flex flex-col items-start">
          <span class="text-[#262626] font-[12px] text-ellipsis mb-1.5">See translation</span>
          <button>
            <p class="text-gray-500 text-sm">View all 13,384 comments</p>
          </button>
          <div class= "mb-2 flex w-full">  
            {/* <input type="text" placeholder="Add a comment..." class="w-full text-[#262626] font-[14px] text-ellipsis line-clamp-1  p-2 border-0 rounded focus:outline-none focus:border-blue-500"/>   */}
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full text-[#262626] font-[14px] p-2 mt-3 border  border-gray-200 rounded focus:outline-none focus:border-blue-500"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              className="ml-2 text-blue-500"
              onClick={handleAddComment}
            >
              Post
            </button>
          </div>
          <div className="mt-2 w-full">
            {comments.map((comment, index) => (
              <div key={index} className="text-[#262626] font-3 border-b border-gray-200 p-2  ">
                {comment}
              </div>
            ))}
          </div>
        </div>     
    </div>    
  </div>
    
      
    )
}

export default PostCard;


{/* <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white">
          <img 
            src="/path-to-your-image.png" 
            alt="Ayrton Senna" 
            className="w-full h-auto object-cover" 
          />
          <div className="p-4">
            <div>
              <button></button>
              <button></button>
            </div>
            <h2 className="text-lg font-bold">Lewis Hamilton</h2>
            <p className="text-gray-600">Parabéns Ayrton, minha inspiração sempre 🇧🇷💫</p>
          </div>
        </div>
      </div> */}