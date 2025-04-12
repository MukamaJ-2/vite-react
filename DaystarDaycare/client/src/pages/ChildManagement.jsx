import { useState } from 'react';
import { PlusIcon, UserGroupIcon, ClipboardDocumentListIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import ChildRegistration from '../components/child/ChildRegistration';
import ChildList from '../components/child/ChildList';
import ChildAttendance from '../components/child/ChildAttendance';
import IncidentReports from '../components/child/IncidentReports';

const ChildManagement = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [showRegistration, setShowRegistration] = useState(false);

  const tabs = [
    { id: 'list', name: 'Children', icon: UserGroupIcon },
    { id: 'attendance', name: 'Attendance', icon: ClipboardDocumentListIcon },
    { id: 'incidents', name: 'Incidents', icon: ExclamationTriangleIcon },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Child Management</h1>
        <button
          onClick={() => setShowRegistration(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Register New Child
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm`}
            >
              <tab.icon
                className={`${
                  activeTab === tab.id ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500'
                } -ml-0.5 mr-2 h-5 w-5`}
                aria-hidden="true"
              />
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow">
        {activeTab === 'list' && <ChildList />}
        {activeTab === 'attendance' && <ChildAttendance />}
        {activeTab === 'incidents' && <IncidentReports />}
      </div>

      {/* Registration Modal */}
      {showRegistration && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Register New Child</h2>
              <ChildRegistration onClose={() => setShowRegistration(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChildManagement; 