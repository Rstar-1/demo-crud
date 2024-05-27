import React from "react";
import FeatherIcon from "feather-icons-react"

const LeftImageSection1 = () => {
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
              <th className="fsize13 textwhite w-20 font-300">
                <p>Meta Keyword</p>
              </th>
              <th className="fsize13 textwhite w-30 font-300">
                <p>Meta Description</p>
              </th>
              <th className="fsize13 textwhite w-10 font-300">
                <p>Actions</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fsize13 textforth w-10 font-300">
                <p>1</p>
              </td>
              <td className="fsize13 textforth w-10 font-300">
                <p>metatitle</p>
              </td>
              <td className="fsize13 textforth w-10 font-300">
                <p>metaauthor</p>
              </td>
              <td className="fsize13 textforth w-20 font-300">
                <p>metakeyword</p>
              </td>
              <td className="fsize13 textforth w-30 font-300">
                <p>metadescription</p>
              </td>
              <td className="fsize13 textforth">
                  <FeatherIcon
                    icon="edit"
                    className="textgray cursor-pointer"
                    size={15}
                  />

                <FeatherIcon
                  icon="trash"
                  className="textgray mlpx3 cursor-pointer"
                  size={15}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeftImageSection1;
