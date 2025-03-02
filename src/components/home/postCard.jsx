

const PostCard = () => {

      
      
  return (
  
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden px-6"> 
    <div className="flex items-center justify-between px-4 ">
    <div className="mt-2 flex items-center gap-x-[8px]"> 
          <img src="/public/Flower_stock_photo.jpg" className="size-8  rounded-full" alt="" /> 
          <div className="flex gap-x-1">
            <span className="text-[14px] text-[#262626] ">lewishamilton </span>  
            <img src="/public/blue.svg" alt="" /></div>
          <span className="text-gray-500 text-sm">.5h</span>  
      </div> 
      
      <button>
        <img src="/public/more.svg" alt="more" />
      </button>
    </div>
    
  <div class="p-4">  
      <img className="w-full h-auto rounded" src="/public/Flower_stock_photo.jpg" alt="Image description"/>  

      <div className="flex flex-col gap-y-3 items-start mt-[10px]"> 
        <span className="flex gap-x-4">
          <img className="size-5" src="/public/heart.svg" alt="like" />
          <img className="size-5"  src="/public/comment.svg" alt="comment" />
        </span>
        <span>
          <p className="font-[8px] text-[#262626] tracking-tight">741 likes</p>
        </span>
      </div>
      <div className="flex gap-x-1">
        <span className="font-medium text-[#262626] tracking-tight">lewishamilton</span>
        <p className="text-[#262626] font-[12px] text-ellipsis line-clamp-1 tracking-tight">Parabéns Ayrton, minha inspiração sempre 🇧🇷</p>
      </div>

      <div className="flex flex-col items-start">
        <span className="text-[#262626] font-[12px] text-ellipsis mb-1.5">See translation</span>
        <button>
          <p className="text-gray-500 text-sm">View all 13,384 comments</p>
        </button>
        <div className= "mb-2">  
          <input type="text" placeholder="Add a comment..." class="w-full text-[#262626] font-[14px] text-ellipsis line-clamp-1  p-2 border-0 rounded focus:outline-none focus:border-blue-500"/>  
        </div>
        
      </div>     
  </div>    
</div>
  
    
  )
}

export default PostCard;
