import { useState } from 'react';

const AddAttendanceForm = ({ onSubmit, onCancel, children, babysitters }) => {
  const [formData, setFormData] = useState({
    childId: '',
    babysitterId: '',
    date: new Date().toISOString().split('T')[0],
    checkIn: '',
    checkOut: '',
    status: 'present',
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
      <div>
        <label htmlFor="childId" className="block text-sm font-medium text-gray-700">
          Child
        </label>
        <select
          name="childId"
          id="childId"
          value={formData.childId}
          onChange={handleChange}
          className="input"
          required
        >
          <option value="">Select a child</option>
          {children.map((child) => (
            <option key={child.id} value={child.id}>
              {child.firstName} {child.lastName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="babysitterId" className="block text-sm font-medium text-gray-700">
          Babysitter
        </label>
        <select
          name="babysitterId"
          id="babysitterId"
          value={formData.babysitterId}
          onChange={handleChange}
          className="input"
          required
        >
          <option value="">Select a babysitter</option>
          {babysitters.map((babysitter) => (
            <option key={babysitter.id} value={babysitter.id}>
              {babysitter.firstName} {babysitter.lastName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          className="input"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">
            Check In Time
          </label>
          <input
            type="time"
            name="checkIn"
            id="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700">
            Check Out Time
          </label>
          <input
            type="time"
            name="checkOut"
            id="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="input"
          />
        </div>
      </div>

      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
          className="input"
          required
        >
          <option value="present">Present</option>
          <option value="absent">Absent</option>
        </select>
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
          Add Attendance
        </button>
      </div>
    </form>
  );
};

export default AddAttendanceForm; 