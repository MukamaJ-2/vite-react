import { useState } from 'react';
import {
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CalendarIcon,
  BellIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const [stats] = useState({
    childrenCount: 4,
    todayEarnings: 'UGX 25,000',
    shiftStatus: 'Active',
    nextShift: 'Tomorrow, 8:00 AM',
  });

  const [children] = useState([
    {
      id: 1,
      name: 'Emma Wilson',
      age: 4,
      status: 'Present',
      session: 'Full Day',
      specialNeeds: 'None',
    },
    {
      id: 2,
      name: 'James Brown',
      age: 3,
      status: 'Present',
      session: 'Morning',
      specialNeeds: 'Allergic to peanuts',
    },
    {
      id: 3,
      name: 'Sophia Lee',
      age: 5,
      status: 'Absent',
      session: 'Full Day',
      specialNeeds: 'None',
    },
    {
      id: 4,
      name: 'Liam Johnson',
      age: 4,
      status: 'Present',
      session: 'Afternoon',
      specialNeeds: 'Asthma',
    },
  ]);

  const [activities] = useState([
    {
      time: '10:00 AM',
      activity: 'Learning Activities',
      status: 'pending',
    },
    {
      time: '12:00 PM',
      activity: 'Lunch Time',
      status: 'pending',
    },
    {
      time: '01:00 PM',
      activity: 'Nap Time',
      status: 'pending',
    },
  ]);

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-700">
          Welcome back! Here's an overview of your day
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UserGroupIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Children Today
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">
                    {stats.childrenCount}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Today's Earnings
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">
                    {stats.todayEarnings}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ClockIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Shift Status
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">
                    {stats.shiftStatus}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CalendarIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Next Shift
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">
                    {stats.nextShift}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Children List */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Children Under Your Care
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {children.map((child) => (
              <li key={child.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <UserGroupIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {child.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Age: {child.age} | Session: {child.session}
                        </p>
                        {child.specialNeeds !== 'None' && (
                          <p className="text-sm text-gray-500">
                            Special Needs: {child.specialNeeds}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      child.status === 'Present'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {child.status}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Quick Actions
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <BellIcon className="h-5 w-5 mr-2" />
                Report Incident
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                Request Time Off
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <ArrowPathIcon className="h-5 w-5 mr-2" />
                Swap Shift
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Activities */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Upcoming Activities
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {activities.map((activity, index) => (
              <li key={index} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <ClockIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.time} - {activity.activity}
                      </p>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      {activity.status}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 