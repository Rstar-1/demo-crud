import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { updateUser, SingleUser } from "../../../../redux/seo/seoSlice";
import { useDispatch } from "react-redux";
import Select from 'react-select'

const EditCard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [Title, setTitle] = useState("");
  const [Author, setAuthor] = useState("");
  const [Keyword, setKeyword] = useState("");
  const [Conacial, setConacial] = useState("");
  const [Description, setDescription] = useState("");
  const [Status, setStatus] = useState(null);
  console.log(Status, "dsa")
  const options = [
    { value: 'true', label: 'Publish' },
    { value: 'false', label: 'Unpublish' }
  ]

  useEffect(() => {
    const fetchUser = async () => {
      const response = await dispatch(SingleUser(id));
      setUser(response.payload);
      setTitle(response.payload.metatitle);
      setAuthor(response.payload.metaauthor);
      setKeyword(response.payload.metakeyword);
      setConacial(response.payload.metaconcial);
      setDescription(response.payload.metadescription);
      setDescription(response.payload.metadescription);
      setStatus(response.payload.status);
    };
    fetchUser();
  }, [dispatch, id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        metatitle: Title,
        metaauthor: Author,
        metakeyword: Keyword,
        metaconcial: Conacial,
        metadescription: Description,
        status: Status.value
      };
      await dispatch(updateUser({ id, data }));
      // Optionally handle success or failure here
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  const handleChange = (option) => {
    setStatus(option);
    console.log('Selected option:', option);
  };
  return (
    <div className="ptpx60 pbpx60 md-ptpx20 md-pbpx20 sm-ptpx20 bg-fa sm-pbpx20">
      <div className="container mx-auto">
        <form onSubmit={handleSubmit} className="mx-auto bshadow w-40 bgwhite p20">
          <h4 className="mtpx1 mbpx1 text-center fsize25 font-600">Edit user</h4>
          <div className="grid-cols-2 gap-12 mtpx20">
            <div className="plpx12 prpx12">
              <label>Title</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                value={Title}
                onChange={e => setTitle(e.target.value)}
                name="metatitle"
              />
            </div>
            <div className="plpx12 prpx12">
              <label>Author</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                value={Author}
                onChange={e => setAuthor(e.target.value)}
                name="metaauthor"
              />
            </div>
            <div className="plpx12 prpx12">
              <label>Keyword</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                value={Keyword}
                onChange={e => setKeyword(e.target.value)}
                name="metakeyword"
              />
            </div>
            <div className="plpx12 prpx12">
              <label>Conacial</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                value={Conacial}
                onChange={e => setConacial(e.target.value)}
                name="metaconcial"
              />
            </div>
            <div className="plpx12 prpx12">
              <label>Description</label>
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                value={Description}
                onChange={e => setDescription(e.target.value)}
                name="metadescription"
              />
            </div>
            <div className="plpx12 prpx12">
              <label>Status</label>
              <Select value={Status}
                onChange={handleChange}
                options={options} />
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

export default EditCard;
