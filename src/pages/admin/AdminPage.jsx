// import React, { useState } from 'react';
// import axios from 'axios';
// import '../admin/AdminPage.css';
// import { toast } from 'react-toastify';
// import { uploadImage,addRoom } from '../../api/Api'; // Ensure this function is defined to handle the image upload


// const AdminPage = () => {
//   const [roomData, setRoomData] = useState({
//     name: '',
//     type: 'single',
//     category: 'makeup',
//     price: '',
//     description: '',
//     amenities: '',
//     availability: true,
//     hotelName: '',
//   });
  


//   const [roomPreviewImage, setRoomPreviewImage] = useState("");
//   const [hotelPreviewImage, setHotelPreviewImage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRoomData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleFileChange = async (e) => {
//     const { name, files } = e.target;
//     if (files.length > 0) {
//       try {
//            const file=files[0];
//         const response = await uploadImage({image:file}); // Adjust according to your API
//         if (name === 'roomImage') {
//           setRoomPreviewImage(response.data.image); // Set the preview URL from the response
//         } else if (name === 'hotelPicture') {
//           setHotelPreviewImage(response.data.image); // Set the preview URL from the response
//         }
//       } catch (error) {
//         console.log(error)
//         toast.error("Error uploading image");
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const formData = new FormData();
//     formData.append('name', roomData.name);
//     formData.append('type', roomData.type);
//     formData.append('category', roomData.category);
//     formData.append('price', roomData.price);
//     formData.append('description', roomData.description);
//     formData.append('amenities', roomData.amenities.split(',').map(item => item.trim()).join(','));
//     formData.append('availability', roomData.availability);
//     formData.append('hotelName', roomData.hotelName);

//     // Add image URLs to formData if available
//     if (roomPreviewImage) {
//       formData.append('image', roomPreviewImage);
//     }

//     if (hotelPreviewImage) {
//       formData.append('hotelPicture', hotelPreviewImage);
//     }

//     try {
//       const response=await addRoom(formData);
//       toast.success("Room added successfully");
//       setRoomData({
//         name: '',
//         type: 'single',
//         category: 'makeup',
//         price: '',
//         description: '',
//         amenities: '',
//         availability: true,
//         hotelName: '',
//       });
//       setRoomPreviewImage("");
//       setHotelPreviewImage("");
//     } catch (error) {
//       toast.error("Error adding room");
//     }
//   };

//   return (
//     <div className="admin-page">
//       <h2>Add a New Room</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={roomData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Type:</label>
//           <select
//             name="type"
//             value={roomData.type}
//             onChange={handleChange}
//             required
//           >
//             <option value="single">Single</option>
//             <option value="double">Double</option>
//             <option value="suite">Suite</option>
//           </select>
//         </div>
//         <div>
//           <label>Category:</label>
//           <select
//             name="category"
//             value={roomData.category}
//             onChange={handleChange}
//             required
//           >
//             <option value="makeup">makeup</option>
//             <option value="non-deluxe">Non-Deluxe</option>
//           </select>
//         </div>
//         <div>
//           <label>Price:</label>
//           <input
//             type="number"
//             name="price"
//             value={roomData.price}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea
//             name="description"
//             value={roomData.description}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Amenities (comma separated):</label>
//           <input
//             type="text"
//             name="amenities"
//             value={roomData.amenities}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Room Image:</label>
//           <input
//             type="file"
//             name="roomImage"
//             accept="image/*"
//             onChange={handleFileChange}
//           />
//           {roomPreviewImage && <img src={roomPreviewImage} alt="Room Preview" style={{ width: '200px', marginTop: '10px' }} />}
//         </div>
//         <div>
//           <label>Hotel Picture:</label>
//           <input
//             type="file"
//             name="hotelPicture"
//             accept="image/*"
//             onChange={handleFileChange}
//           />
//           {hotelPreviewImage && <img src={hotelPreviewImage} alt="Hotel Preview" style={{ width: '200px', marginTop: '10px' }} />}
//         </div>
//         <div>
//           <label>Availability:</label>
//           <select
//             name="availability"
//             value={roomData.availability}
//             onChange={handleChange}
//             required
//           >
//             <option value={true}>Available</option>
//             <option value={false}>Unavailable</option>
//           </select>
//         </div>
//         <div>
//           <label>Hotel Name:</label>
//           <input
//             type="text"
//             name="hotelName"
//             value={roomData.hotelName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Add Room</button>
//       </form>
//     </div>
//   );
// };

// export default AdminPage;


const AdminPage = () => {}

export default AdminPage;