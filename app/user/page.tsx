'use client';

import { useState } from 'react';
import Link from 'next/link';
import { users } from '../lib/db';

export default function UserProfilePage() {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">User Profiles</h1>
          <Link href="/" className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
            Back Home
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* User List */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Users</h2>
            <div className="space-y-2">
              {users.map((user) => (
                <button
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    selectedUser.id === user.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {user.email}
                </button>
              ))}
            </div>
          </div>

          {/* User Details */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Profile Details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 font-semibold">User ID</p>
                  <p className="text-2xl text-gray-800">{selectedUser.id}</p>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">Email</p>
                  <p className="text-2xl text-gray-800">{selectedUser.email}</p>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">Role</p>
                  <p className={`text-2xl font-semibold ${selectedUser.role === 'admin' ? 'text-red-600' : 'text-blue-600'}`}>
                    {selectedUser.role.charAt(0).toUpperCase() + selectedUser.role.slice(1)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">Balance</p>
                  <p className="text-2xl text-green-600 font-bold">${selectedUser.balance}</p>
                </div>

                {selectedUser.role === 'admin' && (
                  <Link
                    href="/admin"
                    className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition mt-4"
                  >
                    Go to Admin Panel
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
