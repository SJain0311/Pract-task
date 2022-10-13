// import React, { useEffect, useState } from "react";

// function AddData() {
//   const [users, setUsers] = useState([]);
//   const [userID, setUserID] = useState("");
//   const [title, setTitle] = useState("");
//   const [detail, setDetail] = useState("");

//   const handleSubmit = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         userID: userID,
//         title: title,
//         detail: detail,
//       }),
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.log("resp", resp);
//         setUsers((item) => {
//           return [...item, { userID, title, detail }];
//         });
//       });
//     });
//   };

//   return (
//     <div className="App">
//       <input
//         type="text"
//         name="userID"
//         onChange={(e) => setUserID(e.target.value)}
//         placeholder="UserID"
//         value={userID}
//       />
//       <br />

//       <input
//         type="text"
//         name="title"
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//         value={title}
//       />
//       <br />
//       <textarea
//         name="detail"
//         onChange={(e) => setDetail(e.target.value)}
//         placeholder="detail"
//         value={detail}
//       />
//       <br />
//       <button onClick={handleSubmit}>Submit Data</button>
//       <br />
//       <br />
//       <br />
//       <table border="1">
//         <tbody>
//           <tr>
//             <td>UserId</td>
//             <td>Title</td>
//             <td>Body</td>
//           </tr>
//           {users.map((item, i) => {
//             return (
//               <tr key={i}>
//                 <td>{item.userID}</td>
//                 <td>{item.title}</td>
//                 <td>{item.detail}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AddData;
