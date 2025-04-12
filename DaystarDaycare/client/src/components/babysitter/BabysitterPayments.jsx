import { useState } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const BabysitterPayments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedBabysitter, setSelectedBabysitter] = useState('');

  // Mock data - replace with actual API calls
  const babysitters = [
    { id: 1, name: 'Jane Doe' },
    { id: 2, name: 'John Smith' },
  ];

  const payments = [
    {
      id: 1,
      babysitterId: 1,
      date: '2024-03-20',
      children: [
        { name: 'Child 1', session: 'full-day', amount: 5000 },
        { name: 'Child 2', session: 'half-day', amount: 2000 },
      ],
      totalAmount: 7000,
      status: 'pending',
    },
    // Add more mock data as needed
  ];

  const calculatePayment = (children) => {
    return children.reduce((total, child) => total + child.amount, 0);
  };

  const handleApprovePayment = (paymentId) => {
    // TODO: Implement payment approval logic
    console.log('Approving payment:', paymentId);
  };

  const handleRejectPayment = (paymentId) => {
    // TODO: Implement payment rejection logic
    console.log('Rejecting payment:', paymentId);
  };

  const filteredPayments = payments.filter((payment) => {
    const matchesDate = payment.date === selectedDate;
    const matchesBabysitter = !selectedBabysitter || payment.babysitterId === parseInt(selectedBabysitter);
    return matchesDate && matchesBabysitter;
  });

  return (
    <div className="p-6">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="babysitter" className="block text-sm font-medium text-gray-700">
            Babysitter
          </label>
          <select
            id="babysitter"
            value={selectedBabysitter}
            onChange={(e) => setSelectedBabysitter(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          >
            <option value="">All Babysitters</option>
            {babysitters.map((babysitter) => (
              <option key={babysitter.id} value={babysitter.id}>
                {babysitter.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Babysitter
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Children
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Amount
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPayments.map((payment) => (
              <tr key={payment.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {babysitters.find((b) => b.id === payment.babysitterId)?.name}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {payment.children.map((child) => (
                      <div key={child.name} className="mb-1">
                        {child.name} - {child.session} ({child.amount.toLocaleString()} UGX)
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {payment.totalAmount.toLocaleString()} UGX
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      payment.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : payment.status === 'approved'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {payment.status === 'pending' && (
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleApprovePayment(payment.id)}
                        className="text-green-600 hover:text-green-900"
                        title="Approve Payment"
                      >
                        <CheckIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleRejectPayment(payment.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Reject Payment"
                      >
                        <XMarkIcon className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BabysitterPayments; 