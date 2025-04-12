import { useState } from 'react';

const ChildRegistration = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    specialNeeds: '',
    sessionType: 'half-day',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const age = parseInt(formData.age);

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (age < 0 || age > 12) newErrors.age = 'Age must be between 0 and 12';
    if (!formData.parentName) newErrors.parentName = 'Parent/Guardian name is required';
    if (!formData.parentPhone) newErrors.parentPhone = 'Parent/Guardian phone is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Handle form submission
      console.log('Form submitted:', formData);
      onClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${
              errors.firstName ? 'border-red-300' : ''
            }`}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${
              errors.lastName ? 'border-red-300' : ''
            }`}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${
              errors.age ? 'border-red-300' : ''
            }`}
          />
          {errors.age && (
            <p className="mt-1 text-sm text-red-600">{errors.age}</p>
          )}
        </div>

        <div>
          <label htmlFor="sessionType" className="block text-sm font-medium text-gray-700">
            Session Type
          </label>
          <select
            name="sessionType"
            id="sessionType"
            value={formData.sessionType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          >
            <option value="half-day">Half Day</option>
            <option value="full-day">Full Day</option>
          </select>
        </div>

        <div>
          <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">
            Parent/Guardian Name
          </label>
          <input
            type="text"
            name="parentName"
            id="parentName"
            value={formData.parentName}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${
              errors.parentName ? 'border-red-300' : ''
            }`}
          />
          {errors.parentName && (
            <p className="mt-1 text-sm text-red-600">{errors.parentName}</p>
          )}
        </div>

        <div>
          <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700">
            Parent/Guardian Phone
          </label>
          <input
            type="tel"
            name="parentPhone"
            id="parentPhone"
            value={formData.parentPhone}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${
              errors.parentPhone ? 'border-red-300' : ''
            }`}
          />
          {errors.parentPhone && (
            <p className="mt-1 text-sm text-red-600">{errors.parentPhone}</p>
          )}
        </div>

        <div>
          <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700">
            Parent/Guardian Email (Optional)
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
          <label htmlFor="specialNeeds" className="block text-sm font-medium text-gray-700">
            Special Care Needs
          </label>
          <textarea
            name="specialNeeds"
            id="specialNeeds"
            rows={3}
            value={formData.specialNeeds}
            onChange={handleChange}
            placeholder="Allergies, medical conditions, dietary restrictions, etc."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onClose}
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
  );
};

export default ChildRegistration; 