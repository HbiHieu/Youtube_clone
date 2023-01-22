import React, { useEffect } from 'react';
import AppProvider from './context/AppProvider';
import AuthProvider from './context/AuthProvider';

import './styles/App.css';
//import { Router } from './routers';
import { router } from './routers';
import { RouterProvider } from 'react-router-dom';
import { auth } from './firebase';
 
function App() {
  
  return (
    <AuthProvider>
      <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
    </AuthProvider>
  );
}

export default App;
