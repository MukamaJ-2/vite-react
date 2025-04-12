import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const BabysitterRegistration = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nin: '',
    age: '',
    nextOfKinName: '',
    nextOfKinPhone: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const age = parseInt(formData.age);

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.nin) newErrors.nin = 'NIN is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (age < 21 || age > 35) newErrors.age = 'Age must be between 21 and 35';
    if (!formData.nextOfKinName) newErrors.nextOfKinName = 'Next of kin name is required';
    if (!formData.nextOfKinPhone) newErrors.nextOfKinPhone = 'Next of kin phone is required';

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
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email (Optional)
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${
              errors.phone ? 'border-red-300' : ''
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="nin" className="block text-sm font-medium text-gray-700">
            National Identification Number (NIN)
          </label>
          <input
            type="text"
            name="nin"
            id="nin"
            value={formData.nin}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${
              errors.nin ? 'border-red-300' : ''
            }`}
          />
          {errors.nin && (
            <p className="mt-1 text-sm text-red-600">{errors.nin}</p>
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
          <label htmlFor="nextOfKinName" className="block text-sm font-medium text-gray-700">
            Next of Kin Name
          </label>
          <input
            type="text"
            name="nextOfKinName"
            id="nextOfKinName"
            value={formData.nextOfKinName}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${
              errors.nextOfKinName ? 'border-red-300' : ''
            }`}
          />
          {errors.nextOfKinName && (
            <p className="mt-1 text-sm text-red-600">{errors.nextOfKinName}</p>
          )}
        </div>

        <div>
          <label htmlFor="nextOfKinPhone" className="block text-sm font-medium text-gray-700">
            Next of Kin Phone
          </label>
          <input
            type="tel"
            name="nextOfKinPhone"
            id="nextOfKinPhone"
            value={formData.nextOfKinPhone}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${
              errors.nextOfKinPhone ? 'border-red-300' : ''
            }`}
          />
          {errors.nextOfKinPhone && (
            <p className="mt-1 text-sm text-red-600">{errors.nextOfKinPhone}</p>
          )}
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
          Register Babysitter
        </button>
      </div>
    </form>
  );
};

export default BabysitterRegistration; 