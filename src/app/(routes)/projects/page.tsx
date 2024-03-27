import ProjectsList from "../../../components/ProjectsList";
import Sidebar from "../../../components/Sidebar";

export default function Projects() {
  return (
    <>
      <div className="flex h-full flex-col justify-between space-y-3 overflow-hidden md:flex-row md:space-y-0">
        <Sidebar activeSection={"projects"} />
        <ProjectsList />
      </div>
    </>
  );
}
