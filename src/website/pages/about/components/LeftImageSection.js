import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import { fetchUsers, updateUser, deleteSeo } from "../../../../redux/seo/seoSlice";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import EditPop from "./EditPop";

const LeftImageSection1 = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  const [seosidebar, setseosidebar] = useState(false)
  console.log(seosidebar, "dsa")
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      console.log(id, "dss")
      const resultAction = await dispatch(deleteSeo(id));
      if (deleteSeo.fulfilled.match(resultAction)) {
        alert('Deleted successfully');
        dispatch(fetchUsers());
      } else {
        alert('Failed to delete item');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('An error occurred while deleting the item');
    }
  };

  const handlePublish = async (id, stat) => {
    try {
      const data = {
        status: stat,
      };
      await dispatch(updateUser({ id, data }));
      dispatch(fetchUsers());
      // Optionally handle success or failure here
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="ptpx60 pbpx60 md-ptpx20 md-pbpx20 sm-ptpx20 bg-fa sm-pbpx20">
      {seosidebar ? (
        <div className="bg-glass2 fixed top-0 right-0 h-100 flex items-center justify-center w-full z-99">
          <EditPop seosidebar={seosidebar} />
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
                <p>Meta Keyword</p>
              </th>
              <th className="fsize13 textwhite w-10 font-300">
                <p>Meta Conacial</p>
              </th>
              <th className="fsize13 textwhite w-30 font-300">
                <p>Meta Description</p>
              </th>
              <th className="fsize13 textwhite w-30 font-300">
                <p>Status</p>
              </th>
              <th className="fsize13 textwhite w-30 font-300">
                <p>Actions</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.user.map((e, index) => (
              <tr>
                <td className="fsize13 textforth w-10 font-300">
                  <p>{index + 1}</p>
                </td>
                <td className="fsize13 textforth w-10 font-300">
                  <p>{e.metatitle}</p>
                </td>
                <td className="fsize13 textforth w-10 font-300">
                  <p>{e.metaauthor}</p>
                </td>
                <td className="fsize13 textforth w-10 font-300">
                  <p>{e.metakeyword}</p>
                </td>
                <td className="fsize13 textforth w-10 font-300">
                  <p>{e.metaconcial}</p>
                </td>
                <td className="fsize13 textforth w-30 font-300">
                  <p>{e.metadescription}</p>
                </td>
                <td className="fsize13 textforth w-30 font-300">
                  <p onClick={() => handlePublish(e._id, !e.status)}>{e.status === true ? "Publish" : null}</p>
                  <p onClick={() => handlePublish(e._id, !e.status)}>{e.status === false ? "Unpublish" : null}</p>
                </td>
                <td className="fsize13 w-30 textforth">
                  <div onClick={() => setseosidebar(e)}>
                    <FeatherIcon
                      icon="edit"
                      className="textgray cursor-pointer"
                      size={15}
                    />
                  </div>
                  <NavLink to={`/edit/${e._id}`}>
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

export default LeftImageSection1;
