import React, { useState, useEffect } from "react";
import {
  updateproject,
  getproject,
  Singleproject
} from "../../../../redux/project/projectSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const EditProject2 = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [Title, setTitle] = useState("");
  const [SubTitle, setSubTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Image, setImage] = useState(null);

  useEffect(() => {
    const fetchproject = async () => {
      try {
        const response = await dispatch(Singleproject(id));
        console.log(response,"fdfds")
        setTitle(response.payload.title);
        setSubTitle(response.payload.subtitle);
        setDescription(response.payload.description);
        setImage(response.payload.picture);
      } catch (error) {
        console.error("Failed to fetch project:", error);
      }
    };
    fetchproject();
  }, [dispatch, id]);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("picture", Image);
      formData.append("title", Title);
      formData.append("subtitle", SubTitle);
      formData.append("description", Description);

      await dispatch(updateproject({ id, formData }));
      dispatch(getproject());
      alert("Project updated successfully!");
    } catch (error) {
      console.error("Error updating project:", error);
      alert("Failed to update project");
    }
  };
  return (
    <div className="bg-white p10">
      <div className="container mx-auto">
        <form
          onSubmit={handleSubmit}
          className="mx-auto bshadow w-40 bgwhite p20"
        >
          <h4 className="mtpx1 mbpx1 text-center fsize25 font-600">Add user</h4>
          <div className="plpx12 prpx12">
            <label>Image</label>
            <input
              className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter"
              type="file"
              onChange={handleFileChange}
              name="imagecms"
              id="imagecms"
              aria-label="Image"
            />
          </div>
          <div className="grid-cols-2 gap-12 mtpx20">
            <div className="plpx12 prpx12">
              <label>Title</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                id="title"
                aria-label="Title"
              />
            </div>
            <div className="plpx12 prpx12">
              <label>subTitle</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                value={SubTitle}
                onChange={(e) => setSubTitle(e.target.value)}
                name="subtitle"
                id="subtitle"
                aria-label="Subtitle"
              />
            </div>
            <div className="plpx12 prpx12">
              <label>Description</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                id="description"
                aria-label="Description"
              />
            </div>
          </div>
          <div className="flex justify-center mtpx20">
            <button
              className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx6 pbpx6 plpx25 prpx25 fsize13 bgprimary"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProject2;
