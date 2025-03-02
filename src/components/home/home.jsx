import PostCard from "./postCard";
import SideBar from "./soofi";

const Home = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="w-[240px] border-r-1 border-[#ccc]">
        <SideBar />
      </div>
      <div>
        <PostCard/>
      </div>
    </div>
  );
};

export default Home;
