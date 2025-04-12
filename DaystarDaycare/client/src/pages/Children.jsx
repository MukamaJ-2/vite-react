import { Link } from 'react-router-dom';
import {
  UserPlusIcon,
  PencilIcon,
  TrashIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

const Children = () => {
  const children = [
    {
      id: 1,
      name: 'Emma Wilson',
      age: 4,
      parent: 'Sarah Wilson',
      parentContact: 'sarah.w@example.com',
      specialNeeds: 'None',
      sessionType: 'Full Day',
      status: 'Present',
      babysitter: 'Jane Smith',
    },
    {
      id: 2,
      name: 'Liam Johnson',
      age: 3,
      parent: 'Michael Johnson',
      parentContact: 'michael.j@example.com',
      specialNeeds: 'Allergies',
      sessionType: 'Half Day',
      status: 'Absent',
      babysitter: 'John Doe',
    },
    {
      id: 3,
      name: 'Olivia Brown',
      age: 5,
      parent: 'David Brown',
      parentContact: 'david.b@example.com',
      specialNeeds: 'None',
      sessionType: 'Full Day',
      status: 'Present',
      babysitter: 'Sarah Johnson',
    },
    {
      id: 4,
      name: 'Noah Davis',
      age: 4,
      parent: 'Emily Davis',
      parentContact: 'emily.d@example.com',
      specialNeeds: 'Speech Therapy',
      sessionType: 'Full Day',
      status: 'Present',
      babysitter: 'Michael Brown',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Children</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage children enrolled in your daycare center
          </p>
        </div>
        <Link
          to="/dashboard/child/register"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Register Child
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parent/Guardian
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Special Needs
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Session Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned Babysitter
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {children.map((child) => (
                <tr key={child.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {child.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{child.age}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{child.parent}</div>
                    <div className="text-sm text-gray-500">{child.parentContact}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{child.specialNeeds}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{child.sessionType}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        child.status === 'Present'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {child.status === 'Present' ? (
                        <CheckCircleIcon className="h-4 w-4 mr-1" />
                      ) : (
                        <XCircleIcon className="h-4 w-4 mr-1" />
                      )}
                      {child.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{child.babysitter}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Children; 