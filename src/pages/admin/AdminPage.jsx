import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getAllBooking, getAllUser, updateBookingStatus, updateUserRole } from '../../api/Api';
import './AdminPage.css';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchBookings();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getAllUser();
      if (response.data.success) {
        setUsers(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await getAllBooking();
      if (response.data.success) {
        setBookings(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleRoleChange = async (userId, newRole) => {
    try {
      const response = await updateUserRole(userId,newRole);
      if (response.data.success) {
        toast.success('User role updated successfully!');
        fetchUsers();  // Refresh users
      } else {
        toast.error('Failed to update user role.');
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleBookingStatusChange = async (bookingId, newStatus) => {
    try {
      const response = await updateBookingStatus(bookingId, newStatus);
      if (response.data.success) {
        toast.success('Booking status updated successfully!');
        fetchBookings();  // Refresh bookings
      } else {
        toast.error('Failed to update booking status.');
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      {/* User Management */}
      <div className="section">
        <h2>User Management</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button 
                  onClick={() => handleRoleChange(user._id, user.role === 'user' ? 'admin' : 'user')}
                  >
                    Change Role to {user.role === 'user' ? 'Admin' : 'User'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Booking Management */}
      <div className="section">
        <h2>Booking Management</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Customer</th>
              <th>Booking Date</th>
              <th>Booking Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.serviceType}</td>
                <td>{booking.userId.fullname}</td>
                <td>{booking.bookingDate}</td>
                <td>{booking.bookingTime}</td>
                <td>{booking.status}</td>
                <td>
                  {booking.status === 'Cancelled' && (
                    <button
                      onClick={() => handleBookingStatusChange(booking._id, 'Pending')}
                      className="complete-btn"
                    >
                      Mark as Pending
                    </button>
                  )}
                  {booking.status === 'Pending' && (
                    <button
                      onClick={() => handleBookingStatusChange(booking._id, 'Cancelled')}
                      className="cancel-btn"
                    >
                      Cancel
                    </button>
                  )}
                  
                  {booking.status === 'Pending' && (
                    <button
                      onClick={() => handleBookingStatusChange(booking._id, 'Confirmed')}
                      className="confirm-btn"
                    >
                      Confirmed
                    </button>
                  )}
                  {booking.status === 'Confirmed' && (
                    <button
                     onClick={() => handleBookingStatusChange(booking._id, 'Cancelled')}
                      className="cancel-btn"
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
