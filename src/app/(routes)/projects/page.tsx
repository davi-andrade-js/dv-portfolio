import ProjectsList from "../../../components/ProjectsList";
import Sidebar from "../../../components/Sidebar";

export default function Projects() {
  return (
    <>
      <div className="flex h-full flex-row justify-between overflow-hidden">
        <Sidebar activeSection={"projects"} />
        <ProjectsList />
      </div>
    </>
  );
}
