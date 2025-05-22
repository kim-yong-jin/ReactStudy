import noProjectImange from '../assets/no-projects.png'
import Button from "./Button.jsx";
export default ({onStartdAddProject}) => {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImange} alt="An empty task list" className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl font-bold text-ston-500 mt-4 my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <p className="mt-8">
                <Button onClick={onStartdAddProject}>Create New project</Button>
            </p>
        </div>
    )
}