import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import { getproject } from "../../../../redux/project/projectSlice";
import { useSelector, useDispatch } from "react-redux";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(getproject());
  }, [dispatch]);

  return (
    <div className="ptpx60 pbpx60 md-ptpx20 md-pbpx20 sm-ptpx20 bg-fa sm-pbpx20">
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
                  <FeatherIcon
                    icon="trash"
                    className="textgray mlpx3 cursor-pointer"
                    size={15}
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