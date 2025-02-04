// "use client"
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// const UpdatePassword = () => {
//   const router = useRouter();
//   const [token, setToken] = useState(null); // State to store token
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Set the token when query parameters are available
//     if (router.isReady) {
//       const { token } = router.query;
//       setToken(token);
//     }
//   }, [router.isReady, router.query]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const response = await axios.post("http://localhost:3001/update-password", {
//         token,
//         password,
//       });
//       setMessage(response.data.message);
//       setTimeout(() => router.push("/login"), 3000); // Redirect to login page
//     } catch (error) {
//       setMessage(error.response?.data?.message || "An error occurred. Please try again.");
//     }
//   };

//   if (!token) {
//     return <p>Loading...</p>; // Show a loading state while waiting for the token
//   }

//   return (
//     <div>
//       <h1>Update Password</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="password"
//           placeholder="Enter your new password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Update Password</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default UpdatePassword;
