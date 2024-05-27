import React from "react";

const HeroSection = () => {
  return (
    <div className="ptpx60 pbpx60 md-ptpx20 md-pbpx20 sm-ptpx20 bg-fa sm-pbpx20">
      <div className="container mx-auto">
        <div className="mx-auto bshadow w-40 bgwhite p20">
          <h4 className="mtpx1 mbpx1 text-center fsize25 font-600">Add user</h4>
          <div className="grid-cols-2 gap-12 mtpx20">
            <div className="plpx12 prpx12">
              <label>Title</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter"
              />
            </div>
            <div className="plpx12 prpx12">
              <label>Author</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter"
              />
            </div>
            <div className="plpx12 prpx12">
              <label>Keyword</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter"
              />
            </div>
            <div className="plpx12 prpx12">
              <label>Description</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter"
              />
            </div>
          </div>
          <div className="flex justify-center mtpx20">
            <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx6 pbpx6 plpx25 prpx25 fsize13 bgprimary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
