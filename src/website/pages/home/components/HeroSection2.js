import React, { useState } from "react";
import { addproject } from "../../../../redux/project/projectSlice";
import { useDispatch } from "react-redux";

const HeroSection = () => {
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

    const validateForm = () => {
        let valid = true;
        let newErrors = { title: "", subTitle: "", description: "", image: "" };

        if (formData.title.trim() === "") {
            newErrors.title = "Enter Title";
            valid = false;
        }
        if (!formData.image) {
            newErrors.image = "Select an Image";
            valid = false;
        }
        if (formData.subTitle.trim() === "") {
            newErrors.subTitle = "Enter Subtitle";
            valid = false;
        }
        if (formData.description.trim() === "") {
            newErrors.description = "Enter Description";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const formToSubmit = new FormData();
        formToSubmit.append("picture", formData.image);
        formToSubmit.append("title", formData.title);
        formToSubmit.append("subtitle", formData.subTitle);
        formToSubmit.append("description", formData.description);

        try {
            const response = await dispatch(addproject(formToSubmit));
            console.log(response,"dsds")
            if (response.type === "project/projectregister/fulfilled") {
                alert("Success");
                // Clear the form fields
                setFormData({
                    title: "",
                    subTitle: "",
                    description: "",
                    image: null,
                    imagePreviewUrl: ""
                });
                setErrors({
                    title: "",
                    subTitle: "",
                    description: "",
                    image: ""
                });
            } else {
                alert("Error");
            }
        } catch (error) {
            console.error("Failed to add project", error);
            alert("Failed to add project");
        }
    };

    return (
        <div className="ptpx60 pbpx60 md-ptpx20 md-pbpx20 sm-ptpx20 bg-fa sm-pbpx20">
            <div className="container mx-auto">
                <form onSubmit={handleSubmit} className="mx-auto bshadow w-40 bgwhite p20">
                    <h4 className="mtpx1 mbpx1 text-center fsize25 font-600">Add Project</h4>
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
                        {errors.image && <p className="fsize12 textdanger font-300 mtpx3 mlpx2">{errors.image}</p>}
                    </div>
                    <div className="grid-cols-2 gap-12 mtpx20">
                        <div className="plpx12 prpx12">
                            <label>Title</label>
                            <input
                                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                                placeholder="Enter"
                                value={formData.title}
                                onChange={handleInputChange}
                                name="title"
                                id="title"
                                aria-label="Title"
                            />
                            {errors.title && <p className="fsize12 textdanger font-300 mtpx3 mlpx2">{errors.title}</p>}
                        </div>
                        <div className="plpx12 prpx12">
                            <label>Subtitle</label>
                            <input
                                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                                placeholder="Enter"
                                value={formData.subTitle}
                                onChange={handleInputChange}
                                name="subTitle"
                                id="subTitle"
                                aria-label="Subtitle"
                            />
                            {errors.subTitle && <p className="fsize12 textdanger font-300 mtpx3 mlpx2">{errors.subTitle}</p>}
                        </div>
                        <div className="plpx12 prpx12">
                            <label>Description</label>
                            <input
                                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                                placeholder="Enter"
                                value={formData.description}
                                onChange={handleInputChange}
                                name="description"
                                id="description"
                                aria-label="Description"
                            />
                            {errors.description && <p className="fsize12 textdanger font-300 mtpx3 mlpx2">{errors.description}</p>}
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

export default HeroSection;