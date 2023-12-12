import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import JobCreateFormDetails from './pages/JobCreateForm/JobCreateFormDetails';
import JobDetails from './pages/JobDetails/JobDetails';
import { routerConfigurations } from './routes/routerConfiguration';
import JobEditForm from './pages/JobEditForm/JobEditForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routerConfigurations.home} element={<JobCreateFormDetails />} />
          <Route path={routerConfigurations.details} element={<JobDetails />} />
          <Route path={`${routerConfigurations.editForm}/:id`} element={<JobEditForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
