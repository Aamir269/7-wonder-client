import './App.css'
import {Routes, Route} from 'react-router-dom'

import ProjectsListPage from "./Pages/ProjectsList";
import ProjectDetailsPage from './Pages/ProjectDetails';
import AddProject from './Pages/AddProject';
import EditProjectPage from './Pages/EditProject';
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import Navbar from './Components/Navbar';

import IsPrivate from './Components/IsPrivate';
import IsAnon from './Components/IsAnon';

function App() {

  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<ProjectsListPage/>}/>

      <Route path="/projects/create" element={<IsPrivate><AddProject/></IsPrivate>}/>

      <Route path="/projects/edit/:projectId" element={<IsPrivate><EditProjectPage/></IsPrivate>}/>

      <Route path="/projects/:projectId" element={<IsPrivate><ProjectDetailsPage/></IsPrivate>}/>

      <Route path="/signup" element={<IsAnon><SignupPage/></IsAnon>}/>
      
      <Route path="/login" element={<IsAnon><LoginPage/></IsAnon>} />
    </Routes>
    </div>
  )
}

export default App