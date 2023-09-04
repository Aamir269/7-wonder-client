import {useState, useEffect} from 'react';
import axios from 'axios'; 
import {Link} from 'react-router-dom';

const API_URL = "http://localhost:5005";

function ProjectsListPage(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      axios.get(`${API_URL}/api/projects`)
      .then((response)=> setProjects(response.data))
      .catch((error)=> console.log(error));
    }, []);

    return(
        <div>
        {projects.map((project)=>{
            return(
                <div key={project._id}>
                    <Link to={`/projects/${project._id}`}><h3>{project.title}</h3></Link>
                </div>
            )
        })}
        </div>
    )  
}

export default ProjectsListPage