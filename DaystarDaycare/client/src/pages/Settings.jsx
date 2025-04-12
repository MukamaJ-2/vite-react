import {
  UserCircleIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  PencilIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

const Settings = () => {
  const profileInfo = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@daystardaycare.com',
    phone: '+256 701 234 567',
    role: 'Manager',
    joinDate: '2023-01-15',
  };

  const daycareInfo = {
    name: 'Daystar Daycare',
    address: '123 Main Street, Kampala, Uganda',
    phone: '+256 700 123 456',
    email: 'info@daystardaycare.com',
    workingHours: '7:00 AM - 6:00 PM',
    capacity: 50,
  };

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="mt-2 text-sm text-gray-700">
          Manage your profile and daycare center settings
        </p>
      </div>

      {/* Profile Settings */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Profile Settings
            </h3>
            <button className="text-primary-600 hover:text-primary-900 flex items-center">
              <PencilIcon className="h-4 w-4 mr-1" />
              Edit Profile
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1 text-sm text-gray-900">{profileInfo.name}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1 text-sm text-gray-900">{profileInfo.email}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1 text-sm text-gray-900">{profileInfo.phone}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <div className="mt-1 text-sm text-gray-900">{profileInfo.role}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Join Date
              </label>
              <div className="mt-1 text-sm text-gray-900">{profileInfo.joinDate}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Daycare Settings */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Daycare Settings
            </h3>
            <button className="text-primary-600 hover:text-primary-900 flex items-center">
              <PencilIcon className="h-4 w-4 mr-1" />
              Edit Settings
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Daycare Name
              </label>
              <div className="mt-1 text-sm text-gray-900">{daycareInfo.name}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <div className="mt-1 text-sm text-gray-900">{daycareInfo.address}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Phone
              </label>
              <div className="mt-1 text-sm text-gray-900">{daycareInfo.phone}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Email
              </label>
              <div className="mt-1 text-sm text-gray-900">{daycareInfo.email}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Working Hours
              </label>
              <div className="mt-1 text-sm text-gray-900">{daycareInfo.workingHours}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Maximum Capacity
              </label>
              <div className="mt-1 text-sm text-gray-900">{daycareInfo.capacity} children</div>
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
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                Change Password
              </h4>
              <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="current-password"
                    id="current-password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="new-password"
                    id="new-password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <CheckIcon className="h-4 w-4 mr-2" />
                  Update Password
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900">
                Two-Factor Authentication
              </h4>
              <div className="mt-2">
                <div className="flex items-center">
                  <input
                    id="2fa"
                    name="2fa"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="2fa" className="ml-2 block text-sm text-gray-900">
                    Enable two-factor authentication
                  </label>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Add an extra layer of security to your account by enabling two-factor authentication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 