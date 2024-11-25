import React from 'react';
import { ArrowRight, Brain, Shield, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation
import UserTypeCard from '../components/UserTypeCard';

const Home = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced Pneumonia Classification Using AI
            </h1>
            <p className="text-xl mb-8">
              Empowering healthcare professionals with accurate, AI-powered pneumonia diagnosis and classification.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-gray-100 transition">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800"
            alt="Medical Background"
            className="h-64 object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Brain className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">Advanced deep learning models for accurate pneumonia classification.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
              <p className="text-gray-600">HIPAA-compliant security measures to protect patient data.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Results</h3>
              <p className="text-gray-600">Get instant analysis and classification results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
  <h2 className="text-3xl font-bold text-center mb-12">Choose Your Role</h2>
  <div className="grid md:grid-cols-3 gap-8">
    <UserTypeCard
      type="doctor"
      title="For Doctors"
      description="Access advanced diagnostic tools and manage patient cases efficiently."
      onClick={() => navigate('/dashboard')} // Navigate to the doctor page
    />
    <UserTypeCard
      type="student"
      title="For Students"
      description="Learn and practice pneumonia classification with real cases."
      onClick={() => navigate('/student')} // Navigate to the student page
    />
  </div>
</div>

      </section>
    </main>
  );
};

export default Home;
