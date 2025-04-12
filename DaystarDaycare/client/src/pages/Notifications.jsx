import { useState } from 'react';
import {
  BellIcon,
  CheckIcon,
  TrashIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  BellAlertIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'Budget',
      title: 'Budget Alert',
      message: 'Food expenses have reached 90% of the monthly budget.',
      time: '9 hours ago',
      read: false,
    },
    {
      id: 2,
      type: 'Incident',
      title: 'New Incident Report',
      message: 'Sarah Johnson reported a minor incident involving Emma Johnson.',
      time: '9 hours ago',
      read: false,
    },
    {
      id: 3,
      type: 'Attendance',
      title: 'Babysitter Absence',
      message: 'Robert Martinez has reported sick leave for today.',
      time: '10 hours ago',
      read: false,
    },
    {
      id: 4,
      type: 'Payment',
      title: 'Payment Received',
      message: 'Payment of UGX 5,000 received from Emma Johnson\'s parents.',
      time: '3/31/2025',
      read: true,
    },
    {
      id: 5,
      type: 'Attendance',
      title: 'Child Absence',
      message: 'Sophia Martinez will be absent today as reported by parents.',
      time: '23 hours ago',
      read: true,
    },
    {
      id: 6,
      type: 'Registration',
      title: 'New Registration',
      message: 'A new child registration form has been submitted for review.',
      time: '3/30/2025',
      read: true,
    },
  ]);

  const [settings, setSettings] = useState({
    incidentReports: true,
    budgetAlerts: true,
    attendanceUpdates: true,
    newRegistrations: true,
  });

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const handleDelete = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const handleSettingToggle = (setting) => {
    setSettings(prev => ({ ...prev, [setting]: !prev[setting] }));
  };

  const filteredNotifications = activeTab === 'All'
    ? notifications
    : notifications.filter(notification => notification.type.toLowerCase() === activeTab.toLowerCase());

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
        <p className="mt-2 text-sm text-gray-700">
          Stay updated with important alerts and information
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <BellIcon className="h-5 w-5 text-gray-500" />
          <span className="text-sm text-gray-500">
            You have {notifications.length} notifications, {unreadCount} unread
          </span>
        </div>
        <button
          onClick={handleMarkAllAsRead}
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Mark All as Read
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {['All', 'Unread', 'Incidents', 'Budget', 'Attendance'].map((tab) => (
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

      {/* Notifications List */}
      <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
        {filteredNotifications.map((notification) => (
          <div key={notification.id} className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <BellAlertIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-3 w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {notification.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {notification.message}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {notification.time}
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex space-x-4">
                {!notification.read && (
                  <button
                    onClick={() => handleMarkAsRead(notification.id)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <CheckIcon className="h-5 w-5" />
                  </button>
                )}
                <button
                  onClick={() => handleDelete(notification.id)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Notification Settings */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Notification Settings</h2>
        <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
          {Object.entries(settings).map(([key, value]) => (
            <div key={key} className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {key === 'incidentReports' && <BellAlertIcon className="h-5 w-5 text-gray-400" />}
                  {key === 'budgetAlerts' && <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />}
                  {key === 'attendanceUpdates' && <UserGroupIcon className="h-5 w-5 text-gray-400" />}
                  {key === 'newRegistrations' && <DocumentTextIcon className="h-5 w-5 text-gray-400" />}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {key.split(/(?=[A-Z])/).join(' ')}
                  </p>
                  <p className="text-sm text-gray-500">
                    Receive notifications about {key.toLowerCase().replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleSettingToggle(key)}
                className={`${
                  value ? 'bg-primary-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
              >
                <span
                  className={`${
                    value ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications; 