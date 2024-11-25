import React from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Shield, 
  Bell, 
  Key,
  Clock,
  FileImage
} from 'lucide-react';

const Profile = () => {
  const user = {
    name: 'Dr. Sarah Wilson',
    email: 'sarah.wilson@hospital.com',
    phone: '+1 (555) 123-4567',
    role: 'Senior Radiologist',
    hospital: 'Central Medical Center',
    lastLogin: '2024-03-10 14:30',
    totalScans: 342
  };

  const recentActivity = [
    { date: '2024-03-10', action: 'Analyzed chest X-ray', patient: 'John D.' },
    { date: '2024-03-10', action: 'Updated profile information', patient: null },
    { date: '2024-03-09', action: 'Analyzed chest X-ray', patient: 'Mary S.' },
    { date: '2024-03-09', action: 'Generated analysis report', patient: 'James R.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Profile Settings</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-6">Personal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <User className="h-5 w-5 text-gray-400 mr-2" />
                    <input 
                      type="text" 
                      value={user.name}
                      className="flex-1 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <Mail className="h-5 w-5 text-gray-400 mr-2" />
                    <input 
                      type="email" 
                      value={user.email}
                      className="flex-1 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <Phone className="h-5 w-5 text-gray-400 mr-2" />
                    <input 
                      type="tel" 
                      value={user.phone}
                      className="flex-1 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Hospital</label>
                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <Shield className="h-5 w-5 text-gray-400 mr-2" />
                    <input 
                      type="text" 
                      value={user.hospital}
                      className="flex-1 outline-none"
                    />
                  </div>
                </div>
              </div>

              <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Save Changes
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-6">Security Settings</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Key className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Password</p>
                      <p className="text-sm text-gray-600">Last changed 3 months ago</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">Change</button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Bell className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-600">Currently enabled</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">Configure</button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Account Overview</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Last Login</p>
                    <p className="font-medium">{user.lastLogin}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FileImage className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Total Scans</p>
                    <p className="font-medium">{user.totalScans}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Role</p>
                    <p className="font-medium">{user.role}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="text-sm font-medium">{activity.action}</p>
                      {activity.patient && (
                        <p className="text-sm text-gray-600">Patient: {activity.patient}</p>
                      )}
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;