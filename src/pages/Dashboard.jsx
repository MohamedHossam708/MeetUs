import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

function Dashboard() {
  const authData = useAuthStore((state) => state);
  const clearCredentials = useAuthStore((state) => state.clearCredentials);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Auth Store Data:", authData);
  }, [authData]);

  const handleLogout = () => {
    clearCredentials(); 
    navigate("/signin"); 
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #b794f6, #f5b8f8, #9E77F6)' }}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-200">
        <div className="max-w-6xl mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold" style={{ 
            background: 'linear-gradient(to right, #9E77F6, #E477F6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium" style={{
                background: 'linear-gradient(to right, #9E77F6, #E477F6)'
              }}>
                {authData?.userInfo?.email?.[0]?.toUpperCase() || "U"}
              </div>
              <span className="text-sm text-gray-600">
                {authData?.userInfo?.email}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-white rounded-lg text-sm font-medium transition-all hover:opacity-90"
              style={{
                background: 'linear-gradient(to right, #9E77F6, #E477F6)'
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto py-8 px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-purple-200">
            <div className="text-sm text-purple-600 mb-1 font-medium">
              Status
            </div>
            <div className="text-2xl font-semibold" style={{ 
              background: 'linear-gradient(to right, #9E77F6, #E477F6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {authData?.token ? "Active" : "Inactive"}
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-purple-200">
            <div className="text-sm text-purple-600 mb-1 font-medium">
              User ID
            </div>
            <div className="text-2xl font-semibold text-gray-900">
              {authData?.userInfo?.id || "N/A"}
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-purple-200">
            <div className="text-sm text-purple-600 mb-1 font-medium">
              Role
            </div>
            <div className="text-2xl font-semibold text-gray-900">
              {authData?.userInfo?.role || "User"}
            </div>
          </div>
        </div>

        {/* User Info Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-purple-200 mb-6">
          <h2 className="text-lg font-semibold mb-4" style={{ 
            background: 'linear-gradient(to right, #9E77F6, #E477F6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            User Information
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-purple-100">
              <span className="text-gray-600">Email</span>
              <span className="font-medium text-gray-900">
                {authData?.userInfo?.email || "Not set"}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-purple-100">
              <span className="text-gray-600">User ID</span>
              <span className="font-medium text-gray-900">
                {authData?.userInfo?.id || "Not set"}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-purple-100">
              <span className="text-gray-600">Name</span>
              <span className="font-medium text-gray-900">
                {authData?.userInfo?.name || "Not set"}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Token Status</span>
              <span
                className={`font-medium ${
                  authData?.token ? "text-green-600" : "text-red-600"
                }`}
              >
                {authData?.token ? "Valid" : "Missing"}
              </span>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Dashboard;