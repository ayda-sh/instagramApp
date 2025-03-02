import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideBar from "../home/soofi";

const Profile = () => {
  const { id } = useParams(); 
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('authToken'); 
        const headers = token ? { Authorization: `Bearer ${token}` } : {}; 
        const response = await axios.get(`https://instagram-backend-ugd3.onrender.com/api/user/${id}`, { headers });

        console.log("🔹 داده‌های دریافتی:", response.data);
        
        setUserData(response.data);
      } catch (error) {
        console.error('خطا در دریافت اطلاعات کاربر:', error);
      }
    };

    if (id) {
      fetchUserData();
    }
  }, [id]); 

  if (!userData) {
    return <div className="text-center mt-10">در حال بارگذاری...</div>;
  }

  return (
    <div className="grid grid-cols-3 bg-white">
      <div className="w-60 border-r-1 border-[#ccc]">
        <SideBar />
      </div>
      <div>
        <div className="flex flex-col items-center justify-center m-auto bg-white">
          <div className="flex items-center gap-x-25 mb-4">
            <div>
              <img className="size-30 rounded-full" src={userData.profileImage} alt="" />
            </div>
            <div className="flex items-center justify-center gap-7 text-[#262626]">
              <span>{userData.username}</span>
              <button className="bg-[#EFEFEF] pb-[7px] pt-[7px] pr-4 pl-4 rounded-lg">
                {userData.isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-x-6 text-[15px] font-light text-[#262626]">
          <p><span className="font-medium">{userData.postsCount}</span> post</p>
          <p><span className="font-medium">{userData.followersCount}</span> followers</p>
          <p><span className="font-medium">{userData.followingCount}</span> following</p>
        </div>
        <div className="text-[#262626] mt-4 pb-8 border-b border-gray-200">
          <p className="font-medium">{userData.fullName}</p>
          <p className="font-light">{userData.bio}</p>
          <a className="text-[#00376B]" href={userData.website}>{userData.website}</a>
        </div>
        <h3 className="text-black text-center">post</h3>
        <div className="flex flex-wrap">
          <div>
            <img className="size-40 p-2" src="/public/Flower_stock_photo.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;



