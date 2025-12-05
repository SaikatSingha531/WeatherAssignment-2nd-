// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// interface Blog {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }
// import { useNavigate } from "react-router-dom";
// import { FaEye } from "react-icons/fa";

// const UseEffectPr = () => {
//   const navigate = useNavigate();
//   const [postList, setPostList] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://dummyjson.com/posts");
//         const data = await response.json();
//         console.log("resposnce", data);

//         setPostList(data.posts);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setTimeout(() => setLoading(false), 500);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-[#ecf2ff] via-[#eef9f9] to-[#fff9f3]">
//         {loading ? (
//           <div className="flex justify-center items-center h-[80vh]">
//            <p>Loading...</p>
//           </div>
//         ) : (
//           <div className="px-6 py-14 min-h-screen">

//             <h2 className="text-5xl font-extrabold text-center mb-16 tracking-wide bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text drop-shadow-lg">
//               Author Page
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//               {postList.map((post) => (
//                 <div
//                   key={post.id}
//                   className="relative bg-white/80 backdrop-blur-2xl border border-gray-200 shadow-xl rounded-3xl p-7 flex flex-col overflow-hidden 
//                   hover:-translate-y-3 hover:shadow-[0_20px_55px_rgba(0,0,0,0.25)] transition-all duration-500 group"
//                 >
//                   <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-600 to-fuchsia-600"></div>
//                   <h3 className="text-[20px] font-extrabold text-gray-900 mb-3 line-clamp-2 leading-snug transition-colors duration-300 group-hover:text-indigo-600">
//                     {post.title}
//                   </h3>

                  
//                   <p className="text-gray-700 text-sm line-clamp-2 mb-4 leading-relaxed">
//                     {post.body}
//                   </p>

                  
//                   <div className="flex items-center gap-1 text-xs font-semibold bg-gray-100 px-3 py-1 rounded-full w-fit mb-6 shadow-sm">
//                     <FaEye /><span className="text-gray-700">{post.views} views</span>
//                   </div>

                 
//                   <button
//                     onClick={() => navigate(`/admin/author/authordetails/${post.id}`)}
//                     className="mt-auto bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-2.5 rounded-xl font-semibold tracking-wide
//               hover:scale-[1.05] active:scale-95 hover:shadow-[0_10px_20px_rgba(0,0,0,0.22)] transition-all duration-300"
//                   >
//                     Read More
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//     </>

//   );
// };

// export  UseEffectPr;
// const Author = () => {
//   const { authorId } = useParams();
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [error, setError] = useState("");

//   const fetchAuthorPosts = async () => {
//     try {
//       const res = await fetch(`https://dummyjson.com/posts/user/${authorId}`);
//       if (!res.ok) throw new Error("Not found");
//       const data = await res.json();
//       setBlogs(data.posts);
//     } catch {
//       setError("No posts found for this author!");
//     }
//   };

//   useEffect(() => {
//     fetchAuthorPosts();
//   }, []);

//   if (error)
//     return <h2 className="text-center text-red-500 text-xl mt-10">{error}</h2>;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">
//         Posts by Author {authorId}
//       </h1>

//       {blogs.map((blog) => (
//         <div key={blog.id} className="border p-4 mb-3 rounded shadow">
//           <h2 className="text-xl font-semibold">{blog.title}</h2>

//           <Link
//             to={`/blog/${blog.id}`}
//             className="text-blue-600 underline"
//           >
//             Read Blog →
//           </Link>
//         </div>
//       ))}

//       <Link to="/" className="text-gray-700 underline">
//         ← Back to Home
//       </Link>
//     </div>
//   );
// };

// export default Author;
