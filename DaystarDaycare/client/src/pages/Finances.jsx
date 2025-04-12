import { useState } from 'react';
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CurrencyDollarIcon,
  ArrowDownTrayIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const Finances = () => {
  const [financialSummary] = useState({
    totalIncome: 29000,
    totalExpenses: 140000,
    netProfit: -111000,
    profitMargin: -383,
  });

  const [incomeTransactions] = useState([
    {
      date: '4/1/2025',
      description: 'Emma Johnson - Full Day Fee',
      category: 'Tuition',
      paymentMethod: 'Cash',
      amount: 5000,
    },
    {
      date: '4/1/2025',
      description: 'Noah Thompson - Half Day Fee',
      category: 'Tuition',
      paymentMethod: 'Mobile Money',
      amount: 2000,
    },
    {
      date: '4/1/2025',
      description: 'Olivia Davis - Full Day Fee',
      category: 'Tuition',
      paymentMethod: 'Bank Transfer',
      amount: 5000,
    },
    {
      date: '4/1/2025',
      description: 'Liam Wilson - Full Day Fee',
      category: 'Tuition',
      paymentMethod: 'Cash',
      amount: 5000,
    },
    {
      date: '4/1/2025',
      description: 'Lucas Taylor - Full Day Fee',
      category: 'Tuition',
      paymentMethod: 'Mobile Money',
      amount: 5000,
    },
    {
      date: '4/1/2025',
      description: 'Mia Anderson - Full Day Fee',
      category: 'Tuition',
      paymentMethod: 'Cash',
      amount: 5000,
    },
    {
      date: '4/1/2025',
      description: 'Ethan Thomas - Half Day Fee',
      category: 'Tuition',
      paymentMethod: 'Mobile Money',
      amount: 2000,
    },
  ]);

  const [showIncomeModal, setShowIncomeModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [incomeForm, setIncomeForm] = useState({
    date: '',
    description: '',
    category: 'Tuition',
    paymentMethod: 'Cash',
    amount: '',
  });
  const [expenseForm, setExpenseForm] = useState({
    date: '',
    description: '',
    category: 'Salary',
    paymentMethod: 'Bank Transfer',
    amount: '',
  });

  const handleIncomeChange = (e) => {
    const { name, value } = e.target;
    setIncomeForm(prev => ({ ...prev, [name]: value }));
  };

  const handleExpenseChange = (e) => {
    const { name, value } = e.target;
    setExpenseForm(prev => ({ ...prev, [name]: value }));
  };

  const handleIncomeSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement API call to record income
    console.log('Income form submitted:', incomeForm);
    setShowIncomeModal(false);
    setIncomeForm({
      date: '',
      description: '',
      category: 'Tuition',
      paymentMethod: 'Cash',
      amount: '',
    });
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement API call to record expense
    console.log('Expense form submitted:', expenseForm);
    setShowExpenseModal(false);
    setExpenseForm({
      date: '',
      description: '',
      category: 'Salary',
      paymentMethod: 'Bank Transfer',
      amount: '',
    });
  };

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Financial Management</h1>
        <p className="mt-2 text-sm text-gray-700">
          Track income, expenses, and manage your daycare finances
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setShowIncomeModal(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Record Income
        </button>
        <button
          onClick={() => setShowExpenseModal(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Record Expense
        </button>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <CurrencyDollarIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Total Income
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    UGX {financialSummary.totalIncome.toLocaleString()}
                  </div>
                  <div className="ml-2 text-sm text-gray-500">
                    For today
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <CurrencyDollarIcon className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Total Expenses
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    UGX {financialSummary.totalExpenses.toLocaleString()}
                  </div>
                  <div className="ml-2 text-sm text-gray-500">
                    For today
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {financialSummary.netProfit >= 0 ? (
                <ArrowTrendingUpIcon className="h-6 w-6 text-green-600" />
              ) : (
                <ArrowTrendingDownIcon className="h-6 w-6 text-red-600" />
              )}
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Net Profit
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    UGX {financialSummary.netProfit.toLocaleString()}
                  </div>
                  <div className="ml-2 text-sm text-gray-500">
                    For today
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {financialSummary.profitMargin >= 0 ? (
                <ArrowTrendingUpIcon className="h-6 w-6 text-green-600" />
              ) : (
                <ArrowTrendingDownIcon className="h-6 w-6 text-red-600" />
              )}
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Profit Margin
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    {financialSummary.profitMargin}%
                  </div>
                  <div className="ml-2 text-sm text-gray-500">
                    For today
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Income/Expenses Toggle */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button className="border-primary-500 text-primary-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Income
            </button>
            <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Expenses
            </button>
          </nav>
        </div>
      </div>

      {/* Income Transactions */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Income Transactions
          </h3>
          <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
        <div className="border-t border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {incomeTransactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.paymentMethod}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    UGX {transaction.amount.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Income Modal */}
      {showIncomeModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Record Income
              </h3>
              <button
                onClick={() => setShowIncomeModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleIncomeSubmit} className="px-4 py-5 sm:p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="income-date" className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="income-date"
                    required
                    value={incomeForm.date}
                    onChange={handleIncomeChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="income-description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="income-description"
                    required
                    value={incomeForm.description}
                    onChange={handleIncomeChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="income-category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    name="category"
                    id="income-category"
                    required
                    value={incomeForm.category}
                    onChange={handleIncomeChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  >
                    <option value="Tuition">Tuition</option>
                    <option value="Registration">Registration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="income-payment-method" className="block text-sm font-medium text-gray-700">
                    Payment Method
                  </label>
                  <select
                    name="paymentMethod"
                    id="income-payment-method"
                    required
                    value={incomeForm.paymentMethod}
                    onChange={handleIncomeChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  >
                    <option value="Cash">Cash</option>
                    <option value="Mobile Money">Mobile Money</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="income-amount" className="block text-sm font-medium text-gray-700">
                    Amount (UGX)
                  </label>
                  <input
                    type="number"
                    name="amount"
                    id="income-amount"
                    required
                    value={incomeForm.amount}
                    onChange={handleIncomeChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-5 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowIncomeModal(false)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Record Income
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Expense Modal */}
      {showExpenseModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Record Expense
              </h3>
              <button
                onClick={() => setShowExpenseModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleExpenseSubmit} className="px-4 py-5 sm:p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="expense-date" className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="expense-date"
                    required
                    value={expenseForm.date}
                    onChange={handleExpenseChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="expense-description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="expense-description"
                    required
                    value={expenseForm.description}
                    onChange={handleExpenseChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="expense-category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    name="category"
                    id="expense-category"
                    required
                    value={expenseForm.category}
                    onChange={handleExpenseChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  >
                    <option value="Salary">Salary</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Supplies">Supplies</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="expense-payment-method" className="block text-sm font-medium text-gray-700">
                    Payment Method
                  </label>
                  <select
                    name="paymentMethod"
                    id="expense-payment-method"
                    required
                    value={expenseForm.paymentMethod}
                    onChange={handleExpenseChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  >
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Mobile Money">Mobile Money</option>
                    <option value="Cash">Cash</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="expense-amount" className="block text-sm font-medium text-gray-700">
                    Amount (UGX)
                  </label>
                  <input
                    type="number"
                    name="amount"
                    id="expense-amount"
                    required
                    value={expenseForm.amount}
                    onChange={handleExpenseChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-5 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowExpenseModal(false)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Record Expense
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Finances; 