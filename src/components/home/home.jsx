import SideBar from "./sideBar";

const Home = () => {
  return (
    <div>
      <div className="w-[240px] border-r-1 border-[#ccc]">
        <SideBar />
      </div>
      <div>
        <postCard/>
      </div>
    </div>
  );
};

export default Home;
