import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import {
  getproject,
  deleteproject,
} from "../../../../redux/project/projectSlice";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import EditProject from "../components/EditProject";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project);
  const {loading, error } = useSelector((state) => state.project);
  const [projectsidebars, setprojectsidebars] = useState(false);
  console.log(projectsidebars, "dsa");

  const handleDelete = async (id) => {
    try {
      console.log(id, "dss");
      const resultAction = await dispatch(deleteproject(id));
      if (deleteproject.fulfilled.match(resultAction)) {
        alert("Deleted successfully");
        dispatch(getproject());
      } else {
        alert("Failed to delete item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred while deleting the item");
    }
  };

  useEffect(() => {
    dispatch(getproject());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="ptpx60 pbpx60 md-ptpx20 md-pbpx20 sm-ptpx20 bg-fa sm-pbpx20">
      {projectsidebars ? (
        <div className="bg-glass2 fixed top-0 right-0 h-100 flex items-center justify-center w-full z-99">
          <EditProject projectsidebars={projectsidebars} />
        </div>
      ) : null}
      <div className="container mx-auto">
        <table>
          <thead>
            <tr>
              <th className="fsize13 textwhite w-10 font-300">
                <p>Id</p>
              </th>
              <th className="fsize13 textwhite w-10 font-300">
                <p>Meta Title</p>
              </th>
              <th className="fsize13 textwhite w-10 font-300">
                <p>Meta Author</p>
              </th>
              <th className="fsize13 textwhite w-10 font-300">
                <p>Meta Title</p>
              </th>
              <th className="fsize13 textwhite w-10 font-300">
                <p>Meta Author</p>
              </th>
              <th className="fsize13 textwhite w-30 font-300">
                <p>Actions</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.project.map((e, index) => (
              <tr key={e.id}>
                <td className="fsize13 textforth w-10 font-300">
                  <p>{index + 1}</p>
                </td>
                <td className="fsize13 textforth w-10 font-300">
                  <img className="w-20" src={e.picture} />
                </td>
                <td className="fsize13 textforth w-10 font-300">
                  <p>{e.subtitle}</p>
                </td>
                <td className="fsize13 textforth w-10 font-300">
                  <p>{e.title}</p>
                </td>
                <td className="fsize13 textforth w-10 font-300">
                  <p>{e.description}</p>
                </td>
                <td className="fsize13 w-30 textforth">
                  {/* <div onClick={() => setprojectsidebars(e)}>
                    <FeatherIcon
                      icon="edit"
                      className="textgray cursor-pointer"
                      size={15}
                    />
                  </div> */}
                  <NavLink to={`/editproject/${e._id}`}>
                    <FeatherIcon
                      icon="edit"
                      className="textgray cursor-pointer"
                      size={15}
                    />
                  </NavLink>

                  <FeatherIcon
                    icon="trash"
                    className="textgray mlpx3 cursor-pointer"
                    size={15}
                    onClick={() => handleDelete(e._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Projects;
