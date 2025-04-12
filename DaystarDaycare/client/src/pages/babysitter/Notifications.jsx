import { useState } from 'react';
import {
  BellIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      title: 'Schedule Updated',
      message: 'Your schedule for next week has been updated',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      type: 'warning',
      title: 'Attendance Reminder',
      message: 'Please confirm attendance for tomorrow',
      time: '5 hours ago',
      read: false,
    },
    {
      id: 3,
      type: 'info',
      title: 'New Message',
      message: 'You have a new message from the manager',
      time: '1 day ago',
      read: true,
    },
    {
      id: 4,
      type: 'error',
      title: 'Payment Issue',
      message: 'There was an issue processing your last payment',
      time: '2 days ago',
      read: true,
    },
  ]);

  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
  });

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon className="h-6 w-6 text-green-500" />;
      case 'warning':
        return <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" />;
      case 'error':
        return <XMarkIcon className="h-6 w-6 text-red-500" />;
      default:
        return <InformationCircleIcon className="h-6 w-6 text-blue-500" />;
    }
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const toggleSetting = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900">Recent Notifications</h2>
          <button
            onClick={markAllAsRead}
            className="text-sm text-primary-600 hover:text-primary-500"
          >
            Mark all as read
          </button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-start p-4 rounded-lg ${
                notification.read ? 'bg-gray-50' : 'bg-primary-50'
              }`}
            >
              <div className="flex-shrink-0 mt-1">{getIcon(notification.type)}</div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">
                    {notification.title}
                  </h3>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{notification.message}</p>
              </div>
              {!notification.read && (
                <button
                  onClick={() => markAsRead(notification.id)}
                  className="ml-4 text-sm text-primary-600 hover:text-primary-500"
                >
                  Mark as read
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Notification Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
              <p className="text-sm text-gray-500">Receive notifications via email</p>
            </div>
            <button
              onClick={() => toggleSetting('emailNotifications')}
              className={`${
                settings.emailNotifications ? 'bg-primary-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
            >
              <span
                className={`${
                  settings.emailNotifications ? 'translate-x-5' : 'translate-x-0'
                } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">SMS Notifications</h3>
              <p className="text-sm text-gray-500">Receive notifications via SMS</p>
            </div>
            <button
              onClick={() => toggleSetting('smsNotifications')}
              className={`${
                settings.smsNotifications ? 'bg-primary-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
            >
              <span
                className={`${
                  settings.smsNotifications ? 'translate-x-5' : 'translate-x-0'
                } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Push Notifications</h3>
              <p className="text-sm text-gray-500">Receive push notifications</p>
            </div>
            <button
              onClick={() => toggleSetting('pushNotifications')}
              className={`${
                settings.pushNotifications ? 'bg-primary-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
            >
              <span
                className={`${
                  settings.pushNotifications ? 'translate-x-5' : 'translate-x-0'
                } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications; 