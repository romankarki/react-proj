import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowCase from './pages/ShowCase';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { GlobalStateProvider } from './states/appContext';

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <GlobalStateProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" Component={Home}/>
              <Route path="/showcase" Component={ShowCase}/>
            </Routes>
          </Router>
        </QueryClientProvider>
      </GlobalStateProvider>
    </div>
  );
}

export default App;
