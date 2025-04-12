import { Link } from 'react-router-dom';
import {
  UserPlusIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

const Babysitters = () => {
  const babysitters = [
    {
      id: 1,
      name: 'Jane Smith',
      contact: 'jane.smith@example.com',
      age: 28,
      nin: 'CM123456789',
      status: 'Active',
      childrenCount: 5,
      joinDate: '2023-01-15',
    },
    {
      id: 2,
      name: 'John Doe',
      contact: 'john.doe@example.com',
      age: 32,
      nin: 'CM987654321',
      status: 'Active',
      childrenCount: 4,
      joinDate: '2023-02-20',
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      contact: 'sarah.j@example.com',
      age: 25,
      nin: 'CM456789123',
      status: 'On Leave',
      childrenCount: 3,
      joinDate: '2023-03-10',
    },
    {
      id: 4,
      name: 'Michael Brown',
      contact: 'michael.b@example.com',
      age: 30,
      nin: 'CM789123456',
      status: 'Active',
      childrenCount: 6,
      joinDate: '2023-04-05',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Babysitters</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your daycare center's babysitters
          </p>
        </div>
        <Link
          to="/dashboard/babysitter/register"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Register Babysitter
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
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NIN
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Children
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Join Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {babysitters.map((babysitter) => (
                <tr key={babysitter.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {babysitter.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{babysitter.contact}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{babysitter.age}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{babysitter.nin}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        babysitter.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {babysitter.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{babysitter.childrenCount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{babysitter.joinDate}</div>
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

export default Babysitters; 