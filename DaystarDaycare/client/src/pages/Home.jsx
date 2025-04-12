import { Link } from 'react-router-dom';
import {
  UserGroupIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  BellAlertIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const Home = () => {
  const features = [
    {
      title: 'Babysitter Management',
      description: 'Register babysitters, manage schedules, and automate payment calculations.',
      icon: UserGroupIcon,
      link: '/babysitters',
    },
    {
      title: 'Child Management',
      description: 'Track child enrollment, attendance, and special care needs.',
      icon: ClipboardDocumentListIcon,
      link: '/children',
    },
    {
      title: 'Financial Management',
      description: 'Track income, expenses, and generate comprehensive financial reports.',
      icon: CurrencyDollarIcon,
      link: '/finance',
    },
    {
      title: 'Notifications & Alerts',
      description: 'Automated notifications for parents and budget threshold alerts.',
      icon: BellAlertIcon,
      link: '/notifications',
    },
    {
      title: 'Reporting & Analytics',
      description: 'Generate customized reports with visual representations of data.',
      icon: ChartBarIcon,
      link: '/reports',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Manage Your Daycare Center</span>
              <span className="block text-primary-200">with Ease</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-primary-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              A comprehensive solution for babysitter management, child care, financial tracking, and more.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/register"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/demo"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-400 md:py-4 md:text-lg md:px-10"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comprehensive Management Features
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Everything you need to run your daycare center efficiently in one place
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Link
                  key={feature.title}
                  to={feature.link}
                  className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0">
                      <feature.icon className="h-12 w-12 text-primary-600" aria-hidden="true" />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                      <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block text-primary-600">
                Start managing your daycare center today.
              </span>
            </h2>
          </div>
          <div className="mt-8 flex justify-center lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    to="/about"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    to="/terms"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Contact Us
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="text-base text-gray-500">
                  123 Daycare Street
                  <br />
                  Kampala, Uganda
                </li>
                <li className="text-base text-gray-500">
                  Email: info@daystardaycare.com
                </li>
                <li className="text-base text-gray-500">
                  Phone: +256 123 456 789
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              © 2025 Daystar Daycare Center. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 