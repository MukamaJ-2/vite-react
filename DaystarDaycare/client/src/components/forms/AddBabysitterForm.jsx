import { useState } from 'react';

const AddBabysitterForm = ({ onSubmit, onCancel }) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
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
            className="input"
            required
          />
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
            className="input"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="input"
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
          className="input"
          required
        />
      </div>

      <div>
        <label htmlFor="nin" className="block text-sm font-medium text-gray-700">
          National ID Number
        </label>
        <input
          type="text"
          name="nin"
          id="nin"
          value={formData.nin}
          onChange={handleChange}
          className="input"
          required
        />
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
          className="input"
          min="21"
          max="35"
          required
        />
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
          className="input"
          required
        />
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
          className="input"
          required
        />
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="btn btn-secondary"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Add Babysitter
        </button>
      </div>
    </form>
  );
};

export default AddBabysitterForm; 