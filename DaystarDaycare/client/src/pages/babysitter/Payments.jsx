import { useState } from 'react';
import {
  CurrencyDollarIcon,
  BanknotesIcon,
  CreditCardIcon,
  ArrowDownTrayIcon,
  CheckCircleIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const Payments = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [payments] = useState([
    {
      id: 1,
      date: 'March 31, 2025',
      amount: 'UGX 25,000',
      type: 'Daily Payment',
      status: 'Completed',
      description: 'Payment for March 31, 2025 (5 children)',
    },
    {
      id: 2,
      date: 'March 30, 2025',
      amount: 'UGX 25,000',
      type: 'Daily Payment',
      status: 'Completed',
      description: 'Payment for March 30, 2025 (5 children)',
    },
    {
      id: 3,
      date: 'March 29, 2025',
      amount: 'UGX 20,000',
      type: 'Daily Payment',
      status: 'Completed',
      description: 'Payment for March 29, 2025 (4 children)',
    },
    {
      id: 4,
      date: 'March 28, 2025',
      amount: 'UGX 25,000',
      type: 'Daily Payment',
      status: 'Completed',
      description: 'Payment for March 28, 2025 (5 children)',
    },
    {
      id: 5,
      date: 'March 27, 2025',
      amount: 'UGX 25,000',
      type: 'Daily Payment',
      status: 'Pending',
      description: 'Payment for March 27, 2025 (5 children)',
    },
  ]);

  const [earnings] = useState({
    totalEarnings: 'UGX 120,000',
    thisMonth: 'UGX 25,000',
    lastMonth: 'UGX 95,000',
    averageDaily: 'UGX 24,000',
  });

  const [paymentSettings] = useState({
    paymentMethod: 'Mobile Money',
    accountNumber: '+256 701 234 567',
    paymentFrequency: 'Daily',
    autoDeposit: true,
  });

  const filteredPayments = activeTab === 'All'
    ? payments
    : payments.filter(payment => payment.status.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">My Payments</h1>
        <p className="mt-2 text-sm text-gray-700">
          View your payment history and manage payment settings
        </p>
      </div>

      {/* Earnings Summary */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Earnings Summary
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
              <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Total Earnings
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">
                          {earnings.totalEarnings}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <BanknotesIcon className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          This Month
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">
                          {earnings.thisMonth}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <BanknotesIcon className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Last Month
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">
                          {earnings.lastMonth}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Average Daily
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">
                          {earnings.averageDaily}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Payment History
            </h3>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Export
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="border-b border-gray-200 mb-6">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {['All', 'Completed', 'Pending'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${
                      activeTab === tab
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <ul className="divide-y divide-gray-200">
              {filteredPayments.map((payment) => (
                <li key={payment.id} className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          {payment.status === 'Completed' ? (
                            <CheckCircleIcon className="h-5 w-5 text-green-400" />
                          ) : (
                            <ClockIcon className="h-5 w-5 text-yellow-400" />
                          )}
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {payment.type}
                          </p>
                          <p className="text-sm text-gray-500">
                            {payment.description}
                          </p>
                          <p className="text-sm text-gray-500">
                            {payment.date}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <p className="text-lg font-medium text-gray-900">
                        {payment.amount}
                      </p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        payment.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {payment.status}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Settings */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Payment Settings
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CreditCardIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      Payment Method
                    </p>
                    <p className="text-sm text-gray-500">
                      {paymentSettings.paymentMethod}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Change
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <BanknotesIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      Account Number
                    </p>
                    <p className="text-sm text-gray-500">
                      {paymentSettings.accountNumber}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Update
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <ClockIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      Payment Frequency
                    </p>
                    <p className="text-sm text-gray-500">
                      {paymentSettings.paymentFrequency}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Change
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      Auto Deposit
                    </p>
                    <p className="text-sm text-gray-500">
                      {paymentSettings.autoDeposit ? 'Enabled' : 'Disabled'}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Toggle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments; 