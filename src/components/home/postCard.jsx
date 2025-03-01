const PostCard = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white">
          <img 
            src="/path-to-your-image.png" 
            alt="Ayrton Senna" 
            className="w-full h-auto object-cover" 
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">Lewis Hamilton</h2>
            <p className="text-gray-600">Parabéns Ayrton, minha inspiração sempre 🇧🇷💫</p>
          </div>
        </div>
      </div>
    )
}

export default PostCard;