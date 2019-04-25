import React from 'react';

import { TeacherHome } from './components';
import Routes from './routes';

const App = () => {
  return (
    <div>
      <main>
        <div>
          <TeacherHome />
        </div>
        <div className="main">
          <Routes />
        </div>
      </main>
    </div>
  );
};

export default App;
