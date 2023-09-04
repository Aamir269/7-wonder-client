import {useState, useEffect} from 'react';
import axios from 'axios'; 
import {Link, useParams} from 'react-router-dom';

const API_URL = 'http://localhost:5005';

function ProjectDetailsPage(){
    const [project,setProject] = useState(null);
    const {projectId} = useParams();

    useEffect(()=>{
        axios.get(`${API_URL}/api/projects/${projectId}`)
            .then((response)=>{
                const oneProject = response.data;
                setProject(oneProject);
            })
            .catch((error)=> console.log(error));
    }, [projectId]);

return(<div>
    {project && (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <Link to={`/projects/edit/${projectId}`}>Edit Project</Link>
        </div>
    )}
    <Link to="/"> Back to Projects</Link>
</div>)
}

export default ProjectDetailsPage