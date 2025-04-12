import { useState } from 'react';
import {
  CheckIcon,
  XMarkIcon,
  ClockIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

const ChildAttendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showAddAttendance, setShowAddAttendance] = useState(false);

  // Mock data - replace with actual API call
  const children = [
    {
      id: 1,
      name: 'John Doe',
      age: 5,
      parentName: 'Jane Doe',
      sessionType: 'full-day',
    },
    // Add more mock data as needed
  ];

  const attendance = [
    {
      id: 1,
      childId: 1,
      date: '2024-03-20',
      checkIn: '08:00',
      checkOut: '16:00',
      status: 'present',
      notes: 'Regular attendance',
    },
    // Add more mock data as needed
  ];

  const handleAddAttendance = () => {
    // Implement attendance addition logic
    console.log('Adding attendance');
    setShowAddAttendance(false);
  };

  const handleMarkAttendance = (childId, status) => {
    // Implement attendance marking logic
    console.log(`Marking attendance for child ${childId} as ${status}`);
  };

  const filteredAttendance = attendance.filter(
    (record) => record.date === selectedDate
  );

  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            />
            <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <button
          onClick={() => setShowAddAttendance(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Add Attendance
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Child
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Session
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Check In/Out
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Notes
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {children.map((child) => {
              const attendanceRecord = filteredAttendance.find(
                (record) => record.childId === child.id
              );

              return (
                <tr key={child.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {child.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {child.age} years old
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        child.sessionType === 'full-day'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {child.sessionType === 'full-day' ? 'Full Day' : 'Half Day'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {attendanceRecord ? (
                      <div className="flex items-center space-x-2">
                        <ClockIcon className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-900">
                          {attendanceRecord.checkIn} - {attendanceRecord.checkOut}
                        </span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500">Not recorded</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {attendanceRecord ? (
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          attendanceRecord.status === 'present'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {attendanceRecord.status.charAt(0).toUpperCase() +
                          attendanceRecord.status.slice(1)}
                      </span>
                    ) : (
                      <span className="text-sm text-gray-500">Not marked</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {attendanceRecord?.notes || '-'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      {!attendanceRecord && (
                        <>
                          <button
                            onClick={() => handleMarkAttendance(child.id, 'present')}
                            className="text-green-600 hover:text-green-900"
                            title="Mark Present"
                          >
                            <CheckIcon className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleMarkAttendance(child.id, 'absent')}
                            className="text-red-600 hover:text-red-900"
                            title="Mark Absent"
                          >
                            <XMarkIcon className="h-5 w-5" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Add Attendance Modal */}
      {showAddAttendance && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Add Attendance
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Child
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm">
                  {children.map((child) => (
                    <option key={child.id} value={child.id}>
                      {child.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Check In Time
                </label>
                <input
                  type="time"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Check Out Time
                </label>
                <input
                  type="time"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Notes
                </label>
                <textarea
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowAddAttendance(false)}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Cancel
              </button>
              <button
                onClick={handleAddAttendance}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChildAttendance; 