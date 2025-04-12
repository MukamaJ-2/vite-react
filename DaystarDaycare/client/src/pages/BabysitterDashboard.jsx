import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
  UserGroupIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  BellIcon,
  CogIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const BabysitterDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/');
  };

  const stats = [
    { name: 'Children Assigned', value: '5', icon: UserGroupIcon },
    { name: 'Today\'s Earnings', value: 'UGX 50,000', icon: CurrencyDollarIcon },
    { name: 'Shift Status', value: 'Active', icon: CalendarIcon },
  ];

  const children = [
    {
      name: 'Emma Johnson',
      sessionType: 'Full Day',
      age: '4 years',
      specialNeeds: 'Allergic to peanuts',
    },
    {
      name: 'Lucas Taylor',
      sessionType: 'Full Day',
      age: '3 years',
      specialNeeds: 'Mild speech delay',
    },
    {
      name: 'Sophia Martinez',
      sessionType: 'Full Day',
      age: '4 years',
      specialNeeds: null,
    },
    {
      name: 'Liam Wilson',
      sessionType: 'Full Day',
      age: '2 years',
      specialNeeds: 'Lactose intolerant',
    },
    {
      name: 'Olivia Davis',
      sessionType: 'Full Day',
      age: '5 years',
      specialNeeds: null,
    },
  ];

  const schedule = [
    { time: '08:00 AM', activity: 'Morning Drop-off', description: 'Check-in children as they arrive' },
    { time: '09:30 AM', activity: 'Snack Time', description: 'Fruit and milk for all children' },
    { time: '10:00 AM', activity: 'Learning Activities', description: 'Age-appropriate educational activities' },
    { time: '12:00 PM', activity: 'Lunch Time', description: 'Balanced meal for all children' },
    { time: '01:00 PM', activity: 'Nap Time', description: 'Rest period for all children' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-900">Daystar Daycare</h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/dashboard/babysitter" className="border-primary-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </Link>
                <Link to="/dashboard/babysitter/schedule" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Schedule
                </Link>
                <Link to="/dashboard/babysitter/notifications" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Notifications
                </Link>
                <Link to="/dashboard/babysitter/settings" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Settings
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Babysitter Dashboard</h1>
            <p className="mt-2 text-sm text-gray-700">
              Welcome back! Here's an overview of your schedule and tasks.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <stat.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {stat.name}
                        </dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">
                            {stat.value}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nested Routes */}
          <div className="mt-8">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default BabysitterDashboard; 