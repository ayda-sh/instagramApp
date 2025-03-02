
// import React, { useState, useEffect } from 'react';
// import PostCard from './PostCard';

// const PostShow = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // استفاده از fetch برای گرفتن داده‌ها از API
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('https://instagram-backend-ugd3.onrender.com/api/article/timeline?page=1&limit=5');
//         const data = await response.json(); // تبدیل پاسخ به فرمت JSON
//         setPosts(data); // ذخیره داده‌ها در state
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       } finally {
//         setLoading(false); // زمانی که داده‌ها بارگذاری شدند، حالت بارگذاری رو غیرفعال می‌کنیم
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>; // نمایش پیام بارگذاری هنگام دریافت داده‌ها
//   }

//   return (
//     <div>
//       {posts.map(post => (
//         <PostCard key={post.id} post={post} />
//       ))}
//     </div>
//   );
// };

// export default PostShow;