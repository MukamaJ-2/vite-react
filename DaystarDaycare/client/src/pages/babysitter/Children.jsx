import { useState } from 'react';
import {
  UserIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  CalendarIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const Children = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [children] = useState([
    {
      id: 1,
      name: 'Emma Wilson',
      age: 4,
      status: 'Present',
      parentContact: '+256 701 234 567',
      session: 'Full Day',
      specialNeeds: 'None',
      attendance: 'Regular',
      notes: 'Likes to nap after lunch',
    },
    {
      id: 2,
      name: 'James Brown',
      age: 3,
      status: 'Present',
      parentContact: '+256 701 234 568',
      session: 'Morning',
      specialNeeds: 'Allergic to peanuts',
      attendance: 'Regular',
      notes: 'Needs help with potty training',
    },
    {
      id: 3,
      name: 'Sophia Lee',
      age: 5,
      status: 'Absent',
      parentContact: '+256 701 234 569',
      session: 'Full Day',
      specialNeeds: 'None',
      attendance: 'Regular',
      notes: 'Advanced reading skills',
    },
    {
      id: 4,
      name: 'Liam Johnson',
      age: 4,
      status: 'Present',
      parentContact: '+256 701 234 570',
      session: 'Afternoon',
      specialNeeds: 'Asthma',
      attendance: 'Regular',
      notes: 'Needs inhaler during outdoor activities',
    },
  ]);

  const [activities] = useState([
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

  const filteredChildren = activeTab === 'All'
    ? children
    : children.filter(child => child.status.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">My Children</h1>
        <p className="mt-2 text-sm text-gray-700">
          View and manage children under your care
        </p>
      </div>

      {/* Children List */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Children List
            </h3>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <CalendarIcon className="h-5 w-5 mr-2" />
              Add Child
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="border-b border-gray-200 mb-6">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {['All', 'Present', 'Absent'].map((tab) => (
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

            <ul className="divide-y divide-gray-200">
              {filteredChildren.map((child) => (
                <li key={child.id} className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <UserIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {child.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            Age: {child.age} | Session: {child.session}
                          </p>
                          <p className="text-sm text-gray-500">
                            Special Needs: {child.specialNeeds}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <div className="flex items-center">
                        {child.status === 'Present' ? (
                          <CheckCircleIcon className="h-5 w-5 text-green-400" />
                        ) : (
                          <XCircleIcon className="h-5 w-5 text-red-400" />
                        )}
                        <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          child.status === 'Present'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {child.status}
                        </span>
                      </div>
                      <button
                        type="button"
                        className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Daily Activities */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Daily Activities
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Today's schedule and activities
          </p>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <ClockIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.time} - {activity.activity}
                      </p>
                      <p className="text-sm text-gray-500">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {activity.status === 'pending' ? (
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
  );
};

export default Children; 