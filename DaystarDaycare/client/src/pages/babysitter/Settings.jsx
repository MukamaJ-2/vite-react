import { useState } from 'react';
import {
  UserIcon,
  BellIcon,
  LockClosedIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ShieldCheckIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';

const Settings = () => {
  const [profile, setProfile] = useState({
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+256 701 234 567',
    address: '123 Main Street, Kampala',
    bio: 'Experienced babysitter with 5 years of experience in childcare.',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: true,
    pushNotifications: true,
    paymentAlerts: true,
    scheduleUpdates: true,
    emergencyAlerts: true,
  });

  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    lastPasswordChange: 'March 15, 2025',
    activeSessions: 2,
  });

  const handleProfileChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationToggle = (setting) => {
    setNotifications(prev => ({ ...prev, [setting]: !prev[setting] }));
  };

  const handleSecurityToggle = (setting) => {
    setSecurity(prev => ({ ...prev, [setting]: !prev[setting] }));
  };

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="mt-2 text-sm text-gray-700">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Profile Settings */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Profile Settings
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="ml-4 flex-1">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={profile.firstName}
                    onChange={(e) => handleProfileChange('firstName', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="ml-4 flex-1">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={profile.lastName}
                    onChange={(e) => handleProfileChange('lastName', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="ml-4 flex-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={profile.email}
                    onChange={(e) => handleProfileChange('email', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="ml-4 flex-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => handleProfileChange('phone', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <MapPinIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="ml-4 flex-1">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={profile.address}
                    onChange={(e) => handleProfileChange('address', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="ml-4 flex-1">
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    rows={3}
                    value={profile.bio}
                    onChange={(e) => handleProfileChange('bio', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Notification Settings
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <BellIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      Email Notifications
                    </p>
                    <p className="text-sm text-gray-500">
                      Receive notifications via email
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleNotificationToggle('emailNotifications')}
                  className={`${
                    notifications.emailNotifications
                      ? 'bg-primary-600'
                      : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
                >
                  <span
                    className={`${
                      notifications.emailNotifications
                        ? 'translate-x-5'
                        : 'translate-x-0'
                    } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <BellIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      SMS Notifications
                    </p>
                    <p className="text-sm text-gray-500">
                      Receive notifications via SMS
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleNotificationToggle('smsNotifications')}
                  className={`${
                    notifications.smsNotifications
                      ? 'bg-primary-600'
                      : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
                >
                  <span
                    className={`${
                      notifications.smsNotifications
                        ? 'translate-x-5'
                        : 'translate-x-0'
                    } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <BellIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      Push Notifications
                    </p>
                    <p className="text-sm text-gray-500">
                      Receive push notifications
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleNotificationToggle('pushNotifications')}
                  className={`${
                    notifications.pushNotifications
                      ? 'bg-primary-600'
                      : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
                >
                  <span
                    className={`${
                      notifications.pushNotifications
                        ? 'translate-x-5'
                        : 'translate-x-0'
                    } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Security Settings
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <ShieldCheckIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      Two-Factor Authentication
                    </p>
                    <p className="text-sm text-gray-500">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleSecurityToggle('twoFactorAuth')}
                  className={`${
                    security.twoFactorAuth
                      ? 'bg-primary-600'
                      : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
                >
                  <span
                    className={`${
                      security.twoFactorAuth
                        ? 'translate-x-5'
                        : 'translate-x-0'
                    } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <KeyIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      Last Password Change
                    </p>
                    <p className="text-sm text-gray-500">
                      {security.lastPasswordChange}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Change Password
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <LockClosedIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      Active Sessions
                    </p>
                    <p className="text-sm text-gray-500">
                      {security.activeSessions} active sessions
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  View Sessions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 