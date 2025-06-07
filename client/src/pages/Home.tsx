
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      {/* Top Navigation */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">PayWallet</h1>
        <div className="space-x-4">
          <Link 
            to="/signin" 
            className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition"
          >
            Sign In
          </Link>
          <Link 
            to="/signup" 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow container mx-auto px-6 py-12 flex flex-col items-center text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
          Modern Financial Management Made Simple
        </h2>
        <p className="text-xl text-blue-700 mb-12 max-w-2xl">
          PayWallet offers seamless money management, instant transfers, and secure transactions at your fingertips.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Easy Transfers</h3>
            <p className="text-blue-600">Send money instantly to anyone, anywhere.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Secure Transactions</h3>
            <p className="text-blue-600">Bank-level encryption for total peace of mind.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Fast Processing</h3>
            <p className="text-blue-600">Lightning-quick transactions and updates.</p>
          </div>
        </div>

        <Link 
          to="/signup" 
          className="px-8 py-3 bg-blue-600 text-white text-xl rounded-full hover:bg-blue-700 transition shadow-lg"
        >
          Get Started Now
        </Link>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p>&copy; 2024 PayWallet. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-300">Terms of Service</a>
            <a href="#" className="hover:text-blue-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;