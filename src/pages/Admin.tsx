import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export const Admin = () => {
  return (
    <div
      className="flex min-h-screen h-full flex-row flex-grow my-auto"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1501696461415-6bd6660c6742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)`
      }}
    >
      <div className="hidden md:flex md:mr-10 md:relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[80vw] md:max-w-[80vw] xl:max-w-[75vw] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};
