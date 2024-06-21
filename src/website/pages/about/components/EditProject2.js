import React, { useState, useEffect } from "react";
import { updateproject, getproject, Singleproject } from "../../../../redux/project/projectSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const EditProject2 = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    description: "",
    image: null,
    imagePreviewUrl: ""
  });

  const [errors, setErrors] = useState({
    title: "",
    subTitle: "",
    description: "",
    image: ""
  });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await dispatch(Singleproject(id));
        const project = response.payload;
        setFormData({
          title: project.title,
          subTitle: project.subtitle,
          description: project.description,
          image: project.picture,
          imagePreviewUrl: project.picture // Assuming `picture` is a URL
        });
      } catch (error) {
        console.error("Failed to fetch project:", error);
      }
    };
    fetchProject();
  }, [dispatch, id]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prevState => ({
          ...prevState,
          image: file,
          imagePreviewUrl: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFormData(prevState => ({
      ...prevState,
      image: null,
      imagePreviewUrl: ""
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = {
      title: "",
      subTitle: "",
      description: "",
      image: ""
    };

    if (!formData.title) {
      newErrors.title = "Enter Title";
      valid = false;
    }
    if (!formData.subTitle) {
      newErrors.subTitle = "Enter Subtitle";
      valid = false;
    }
    if (!formData.description) {
      newErrors.description = "Enter Description";
      valid = false;
    }
    if (!formData.image) {
      newErrors.image = "Upload an Image";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    try {
      const updatedData = new FormData();
      updatedData.append("picture", formData.image);
      updatedData.append("title", formData.title);
      updatedData.append("subtitle", formData.subTitle);
      updatedData.append("description", formData.description);

      await dispatch(updateproject({ id, formData: updatedData }));
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
        <form onSubmit={handleSubmit} className="mx-auto bshadow w-40 bgwhite p20">
          <h4 className="mtpx1 mbpx1 text-center fsize25 font-600">Edit Project</h4>
          <div className="plpx12 prpx12">
            <label>Image</label>
            <input
              className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
              type="file"
              onChange={handleFileChange}
              name="image"
              id="image"
              aria-label="Image"
            />
            {formData.imagePreviewUrl && (
              <div className="relative mtpx10">
                <img
                  src={formData.imagePreviewUrl}
                  alt="ImagePreview"
                  className="w-full"
                  style={{ height: 'auto', maxHeight: '300px', objectFit: 'cover' }}
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 mtpx2 mpx2 bgred-600 text-white rounded-full ppx2"
                  onClick={handleRemoveImage}
                >
                  X
                </button>
              </div>
            )}
            <p className="fsize12 textdanger font-300 mtpx3 mlpx2">{errors.image}</p>
          </div>
          <div className="grid-cols-2 gap-12 mtpx20">
            <div className="plpx12 prpx12">
              <label>Title</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter Title"
                value={formData.title}
                onChange={handleInputChange}
                name="title"
                id="title"
                aria-label="Title"
              />
              <p className="fsize12 textdanger font-300 mtpx3 mlpx2">{errors.title}</p>
            </div>
            <div className="plpx12 prpx12">
              <label>Subtitle</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter Subtitle"
                value={formData.subTitle}
                onChange={handleInputChange}
                name="subTitle"
                id="subTitle"
                aria-label="Subtitle"
              />
              <p className="fsize12 textdanger font-300 mtpx3 mlpx2">{errors.subTitle}</p>
            </div>
            <div className="plpx12 prpx12">
              <label>Description</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter Description"
                value={formData.description}
                onChange={handleInputChange}
                name="description"
                id="description"
                aria-label="Description"
              />
              <p className="fsize12 textdanger font-300 mtpx3 mlpx2">{errors.description}</p>
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