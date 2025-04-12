import { useState } from 'react';
import {
  ClockIcon,
  CheckIcon,
  CalendarIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('Today');
  const [schedule] = useState([
    {
      time: '08:00 AM',
      activity: 'Morning Drop-off',
      description: 'Check-in children as they arrive',
      status: 'completed',
    },
    {
      time: '09:30 AM',
      activity: 'Snack Time',
      description: 'Fruit and milk for all children',
      status: 'completed',
    },
    {
      time: '10:00 AM',
      activity: 'Learning Activities',
      description: 'Age-appropriate educational activities',
      status: 'pending',
    },
    {
      time: '12:00 PM',
      activity: 'Lunch Time',
      description: 'Balanced meal for all children',
      status: 'pending',
    },
    {
      time: '01:00 PM',
      activity: 'Nap Time',
      description: 'Rest period for all children',
      status: 'pending',
    },
    {
      time: '03:00 PM',
      activity: 'Afternoon Snack',
      description: 'Light snack for all children',
      status: 'pending',
    },
    {
      time: '03:30 PM',
      activity: 'Outdoor Play',
      description: 'Supervised playground activities',
      status: 'pending',
    },
    {
      time: '05:00 PM',
      activity: 'Evening Pick-up',
      description: 'Check-out children as parents arrive',
      status: 'pending',
    },
  ]);

  const [timeOff] = useState([
    {
      date: 'April 5-6, 2025',
      type: 'Weekend',
      status: 'Approved',
    },
    {
      date: 'April 12-13, 2025',
      type: 'Weekend',
      status: 'Approved',
    },
    {
      date: 'April 19-20, 2025',
      type: 'Weekend',
      status: 'Approved',
    },
  ]);

  const [reminders] = useState([
    {
      title: 'Staff Meeting',
      date: 'Friday, April 3 at 5:30 PM',
    },
    {
      title: 'Monthly Reports Due',
      date: 'Thursday, April 30',
    },
  ]);

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">My Schedule</h1>
        <p className="mt-2 text-sm text-gray-700">
          View and manage your work schedule
        </p>
      </div>

      {/* Schedule Overview */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Schedule Overview
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Your upcoming shifts and activities
          </p>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="border-b border-gray-200 mb-6">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {['Today', 'This Week', 'This Month'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${
                      activeTab === tab
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                Wednesday, April 1, 2025
              </h4>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <ClockIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.time} - {item.activity}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {item.status === 'pending' ? (
                        <button
                          type="button"
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        >
                          Mark as Completed
                        </button>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Completed
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
                <CalendarIcon className="h-5 w-5 mr-2" />
                Request Time Off
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <ArrowPathIcon className="h-5 w-5 mr-2" />
                Swap Shift
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                Report Absence
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Time Off */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Upcoming Time Off
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {timeOff.map((item, index) => (
              <li key={index} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {item.date}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.type}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {item.status}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Reminders */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Reminders
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {reminders.map((item, index) => (
              <li key={index} className="px-4 py-4 sm:px-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.date}
                    </p>
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

export default Schedule; 