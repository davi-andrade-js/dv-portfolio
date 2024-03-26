import ProjectsList from "../../components/ProjectsList";
import Sidebar from "../../components/Sidebar";

export default function Projects() {
  return (
    <>
      <div className="flex flex-row justify-between h-full">
        <Sidebar activeSection={"projects"} />
        <ProjectsList />
      </div>
    </>
  );
}
