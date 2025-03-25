import { AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NoMatch() {
  const navigate = useNavigate();
  console.log('navigate--', navigate);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="max-w-md w-full text-center">
        <div className="bg-white shadow-xl rounded-lg p-8 border border-gray-200">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="text-red-500 w-24 h-24" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
          <p className="text-gray-500 mb-6">
            Oops! The page you're looking for seems to have wandered off into the digital
            wilderness.
          </p>
          <a
            // href="/"
            onClick={() => navigate('/')}
            className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Return to Home
          </a>
        </div>
        <p className="mt-8 text-gray-400 text-sm">Need help? Contact our support team</p>
      </div>
    </div>
  );
}
