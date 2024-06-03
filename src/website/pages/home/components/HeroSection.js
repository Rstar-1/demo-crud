import React, { useState } from "react";
import { addUser } from "../../../../redux/seo/seoSlice";
import { useSelector, useDispatch } from "react-redux";

const HeroSection = () => {
  const dispatch = useDispatch();

  // const { isSuccess } = useSelector((state) => state.user);
  const [inputValue, setInputValue] = useState({
    metatitle: "",
    metaauthor: "",
    metakeyword: "",
    metaconcial: "",
    metadescription: "",
  });

  const handleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    console.log(e.target.name, "ds");
    // console.log(e.target.value, "dss");
  };
  const handleSubmit = (e) => {
    console.log(inputValue,'555');
    e.preventDefault();
    dispatch(addUser(inputValue));
    console.log(inputValue);

    setTimeout(() => {
      alert("rr");
    }, 2000);
  };
  return (
    <div className="ptpx60 pbpx60 md-ptpx20 md-pbpx20 sm-ptpx20 bg-fa sm-pbpx20">
      <div className="container mx-auto">
        <form onSubmit={handleSubmit} className="mx-auto bshadow w-40 bgwhite p20">
          <h4 className="mtpx1 mbpx1 text-center fsize25 font-600">Add user</h4>
          <div className="grid-cols-2 gap-12 mtpx20">
            <div className="plpx12 prpx12">
              <label>Title</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                value={inputValue.metatitle}
                onChange={handleInput}
                name="metatitle"
              />
            </div>
            <div className="plpx12 prpx12">
              <label>Author</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                value={inputValue.metaauthor}
                onChange={handleInput}
                name="metaauthor"
              />
            </div>
            <div className="plpx12 prpx12">
              <label>Keyword</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                value={inputValue.metakeyword}
                onChange={handleInput}
                name="metakeyword"
              />
            </div>
            <div className="plpx12 prpx12">
              <label>Conacial</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                value={inputValue.metaconcial}
                onChange={handleInput}
                name="metaconcial"
              />
            </div>
            <div className="plpx12 prpx12">
              <label>Description</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                value={inputValue.metadescription}
                onChange={handleInput}
                name="metadescription"
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
