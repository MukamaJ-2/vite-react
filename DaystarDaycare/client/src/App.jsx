import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Babysitters from './pages/Babysitters';
import Children from './pages/Children';
import Finances from './pages/Finances';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import BabysitterDashboard from './pages/babysitter/Dashboard';
import BabysitterRegistration from './pages/babysitter/BabysitterRegistration';
import ChildRegistration from './pages/child/ChildRegistration';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Manager Dashboard Routes */}
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="babysitters" element={<Babysitters />} />
            <Route path="children" element={<Children />} />
            <Route path="finances" element={<Finances />} />
            <Route path="reports" element={<Reports />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="settings" element={<Settings />} />
            <Route path="babysitter/register" element={<BabysitterRegistration />} />
            <Route path="child/register" element={<ChildRegistration />} />
          </Route>

          {/* Babysitter Dashboard Routes */}
          <Route path="/dashboard/babysitter" element={
            <PrivateRoute>
              <BabysitterDashboard />
            </PrivateRoute>
          } />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
