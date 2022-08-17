import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from 'Routes/AllRoutes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
