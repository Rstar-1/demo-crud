import React from "react";

const Brand = () => {
  const branddata = [
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_1.svg",
      name: "Creative",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_2.svg",
      name: "Brand Agency",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_3.svg",
      name: "Zinaco Brand",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_4.svg",
      name: "Creative Agency",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_5.svg",
      name: "Digital Agency",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_6.svg",
      name: "Finance",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_7.svg",
      name: "Organic",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_8.svg",
      name: "Technology",
    },
  ];

  return (
    <div className="ptpx40 pbpx40 md-ptpx30 md-pbpx30 sm-ptpx20 sm-pbpx20 bgprimary">
      <div className="container mx-auto">
        <div className="grid-cols-4 md-grid-cols-2 sm-grid-cols-1">
          {branddata.map((e) => (
            <div className="bgforth rounded-5 brand2-h m5">
              <div>
                <img
                  src={e.picture}
                  alt="brand2-img"
                  className="brand2-img object-contain"
                />
                <p className="mtpx8 fsize18 md-fsize16 sm-fsize14 font-500 textwhite">
                  {e.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
