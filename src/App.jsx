import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState,setProjectsState] = useState({
      selectedProjectId : undefined,
      projects:[],
      tasks:[]
  })

  const handleAddTask = (text) => {
      setProjectsState(prevState => {
          const taskId = Math.random();
          const newTask = {
              text:text,
              id: taskId,
              projectId: prevState.selectedProjectId
          };
          return {
              ...prevState,
              tasks: [newTask,...prevState.tasks]
          } ;
      });
  }

  const handleDelteTask = (id) => {
      setProjectsState((prevState) => {
          return {
              ...prevState,
              tasks: prevState.tasks.filter(
                  (task) => task.id !== id
              )
          };
      });
  }
  const handleSelectProject = (id) => {
      setProjectsState(prevState => {
          return{
              ...prevState,
              selectedProjectId : id,
          };
      });
  }
  const handleStartdAddProject = () => {
      setProjectsState(prevState => {
          return{
              ...prevState,
              selectedProjectId : null,
          };
      });
  }

  const handleCancleAddProject = () => {
      setProjectsState((prevState) => {
          return {
              ...prevState,
              selectedProjectId: undefined
          };
      });
    }
  const handleAddProject = (projectData) => {
      setProjectsState(prevState => {
         const newProject = {
             ...projectData,
             id: Math.random()
         };
         return {
            ...prevState,
             selectedProjectId: undefined,
            projects: [...prevState.projects,newProject]
         } ;
      });
  }
  const handleDeleteProject = () => {
      setProjectsState((prevState) => {
          return {
              ...prevState,
              selectedProjectId: undefined,
              projects: prevState.projects.filter(
                  (project) => project.id !== prevState.selectedProjectId
              )
          };
      });
  }
  const seletedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  let content =(
      <SelectedProject project={seletedProject}
                       onDelete={handleDeleteProject}
                       onAddTask={handleAddTask}
                       onDeleteTask={handleDelteTask}
                       tasks={projectsState.tasks}
      />
  );

  if(projectsState.selectedProjectId === null){
      content = <NewProject onAdd={handleAddProject} onCancel={handleCancleAddProject}/>
  } else if(projectsState.selectedProjectId === undefined){
      content = <NoProjectSelected onStartdAddProject={handleStartdAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar onStartdAddProject={handleStartdAddProject}
                         projects={projectsState.projects}
                         onSelectProject={handleSelectProject}
                         onSeletedProjectId={projectsState.selectedProjectId}/>
        {content}
    </main>
  );
}

export default App;
