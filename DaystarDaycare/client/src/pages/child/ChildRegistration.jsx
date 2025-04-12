import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChildRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    sessionType: 'full',
    babysitterId: '',
    allergies: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    parentAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement API call to register child
    console.log('Form submitted:', formData);
    navigate('/dashboard/children');
  };

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Register Child</h1>
        <p className="mt-2 text-sm text-gray-700">
          Add a new child to your daycare center
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Child Information */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Child Information
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Enter the child's personal information and special care needs
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                Date of Birth *
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                required
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="sessionType" className="block text-sm font-medium text-gray-700">
                Session Type *
              </label>
              <select
                name="sessionType"
                id="sessionType"
                required
                value={formData.sessionType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              >
                <option value="full">Full Day (8:00 AM - 5:00 PM)</option>
                <option value="half">Half Day (8:00 AM - 12:00 PM)</option>
              </select>
            </div>

            <div>
              <label htmlFor="babysitterId" className="block text-sm font-medium text-gray-700">
                Assign Babysitter *
              </label>
              <select
                name="babysitterId"
                id="babysitterId"
                required
                value={formData.babysitterId}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              >
                <option value="">Select a babysitter</option>
                {/* TODO: Populate with actual babysitters from API */}
                <option value="1">John Doe</option>
                <option value="2">Jane Smith</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">
                Special Care Needs
              </label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="allergies"
                    id="allergies"
                    checked={formData.allergies}
                    onChange={(e) => setFormData(prev => ({ ...prev, allergies: e.target.checked }))}
                    className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Allergies</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Parent/Guardian Information */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Parent/Guardian Information
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">
                Parent/Guardian Name *
              </label>
              <input
                type="text"
                name="parentName"
                id="parentName"
                required
                value={formData.parentName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                type="tel"
                name="parentPhone"
                id="parentPhone"
                required
                value={formData.parentPhone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="parentEmail"
                id="parentEmail"
                value={formData.parentEmail}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="parentAddress" className="block text-sm font-medium text-gray-700">
                Residential Address
              </label>
              <input
                type="text"
                name="parentAddress"
                id="parentAddress"
                value={formData.parentAddress}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate('/dashboard/children')}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Register Child
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChildRegistration; 