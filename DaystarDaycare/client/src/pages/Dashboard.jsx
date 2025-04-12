import { Link } from 'react-router-dom';
import {
  UserGroupIcon,
  UserIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  BellIcon,
  CogIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const stats = [
    { name: 'Total Children', value: '45', icon: UserGroupIcon },
    { name: 'Total Babysitters', value: '8', icon: UserIcon },
    { name: 'Monthly Revenue', value: 'UGX 4,500,000', icon: CurrencyDollarIcon },
    { name: 'Attendance Rate', value: '92%', icon: ChartBarIcon },
  ];

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-700">
          Welcome back! Here's an overview of your daycare center.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Quick Links */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          to="/dashboard/babysitters"
          className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200"
        >
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Manage Babysitters</h3>
                <p className="mt-1 text-sm text-gray-500">
                  View and manage your babysitter team
                </p>
              </div>
              <ArrowRightIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </Link>

        <Link
          to="/dashboard/children"
          className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200"
        >
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Manage Children</h3>
                <p className="mt-1 text-sm text-gray-500">
                  View and manage children in your care
                </p>
              </div>
              <ArrowRightIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </Link>

        <Link
          to="/dashboard/finances"
          className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200"
        >
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Financial Overview</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Track revenue and expenses
                </p>
              </div>
              <ArrowRightIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </Link>

        <Link
          to="/dashboard/reports"
          className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200"
        >
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Reports</h3>
                <p className="mt-1 text-sm text-gray-500">
                  View attendance and incident reports
                </p>
              </div>
              <ArrowRightIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </Link>

        <Link
          to="/dashboard/notifications"
          className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200"
        >
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
                <p className="mt-1 text-sm text-gray-500">
                  View and manage notifications
                </p>
              </div>
              <ArrowRightIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </Link>

        <Link
          to="/dashboard/settings"
          className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200"
        >
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Settings</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Manage your profile and daycare settings
                </p>
              </div>
              <ArrowRightIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard; 