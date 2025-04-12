import { useState } from 'react';
import {
  ChartBarIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';

const Reports = () => {
  const [attendanceData] = useState([
    { month: 'Jan', present: 45, absent: 5 },
    { month: 'Feb', present: 48, absent: 2 },
    { month: 'Mar', present: 42, absent: 8 },
    { month: 'Apr', present: 46, absent: 4 },
    { month: 'May', present: 49, absent: 1 },
    { month: 'Jun', present: 47, absent: 3 },
  ]);

  const [financialReports] = useState([
    {
      id: 1,
      title: 'Monthly Financial Report - December 2023',
      type: 'Financial',
      date: '2023-12-01',
      status: 'Available',
    },
    {
      id: 2,
      title: 'Quarterly Financial Summary - Q4 2023',
      type: 'Financial',
      date: '2023-12-15',
      status: 'Available',
    },
    {
      id: 3,
      title: 'Annual Financial Report - 2023',
      type: 'Financial',
      date: '2023-12-31',
      status: 'Pending',
    },
  ]);

  const [incidentReports] = useState([
    {
      id: 1,
      childName: 'Emma Wilson',
      date: '2023-12-10',
      type: 'Minor Injury',
      description: 'Fell while playing, minor scratch on knee',
      status: 'Resolved',
    },
    {
      id: 2,
      childName: 'Liam Johnson',
      date: '2023-12-05',
      type: 'Allergic Reaction',
      description: 'Mild allergic reaction to peanuts',
      status: 'Resolved',
    },
    {
      id: 3,
      childName: 'Olivia Brown',
      date: '2023-12-01',
      type: 'Behavioral',
      description: 'Difficulty sharing toys with peers',
      status: 'In Progress',
    },
  ]);

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
        <p className="mt-2 text-sm text-gray-700">
          View and analyze daycare performance metrics and reports
        </p>
      </div>

      {/* Attendance Trends */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Attendance Trends
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="flex items-end space-x-4">
            {attendanceData.map((data) => (
              <div key={data.month} className="flex-1">
                <div className="flex flex-col items-center">
                  <div className="flex items-end space-x-1">
                    <div
                      className="w-8 bg-green-500 rounded-t"
                      style={{ height: `${(data.present / 50) * 100}px` }}
                    />
                    <div
                      className="w-8 bg-red-500 rounded-t"
                      style={{ height: `${(data.absent / 50) * 100}px` }}
                    />
                  </div>
                  <span className="mt-2 text-sm text-gray-500">{data.month}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
              <span className="text-sm text-gray-500">Present</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />
              <span className="text-sm text-gray-500">Absent</span>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Reports */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Financial Reports
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {financialReports.map((report) => (
                  <tr key={report.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {report.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {report.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {report.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          report.status === 'Available'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {report.status === 'Available' && (
                        <button className="text-primary-600 hover:text-primary-900">
                          <ArrowDownTrayIcon className="h-5 w-5" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Incident Reports */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Incident Reports
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Child
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {incidentReports.map((report) => (
                  <tr key={report.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {report.childName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {report.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {report.type}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {report.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          report.status === 'Resolved'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {report.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports; 