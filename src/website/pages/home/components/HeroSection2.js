import React, { useState } from "react";
import { addproject } from "../../../../redux/project/projectSlice";
import { useSelector, useDispatch } from "react-redux";

const HeroSection = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        console.log(e,"rr")
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("picture", image);
        formData.append("title", title);
        formData.append("subtitle", subTitle);
        formData.append("description", description);

        try {
            await dispatch(addproject(formData));
            alert("Project added successfully!");

            // Clear the form fields
            setTitle("");
            setSubTitle("");
            setDescription("");
            setImage(null);
        } catch (error) {
            console.error("Failed to add project", error);
            alert("Failed to add project");
        }
    };
    return (
        <div className="ptpx60 pbpx60 md-ptpx20 md-pbpx20 sm-ptpx20 bg-fa sm-pbpx20">
            <div className="container mx-auto">
                <form onSubmit={handleSubmit} className="mx-auto bshadow w-40 bgwhite p20">
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
                                value={title}
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
                                value={subTitle}
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
                                value={description}
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

export default HeroSection;
