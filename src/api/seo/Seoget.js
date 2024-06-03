import API from "../factory";

const get = "getseodata";

const seoget = (route) => {
  return `api/${route}`;
};

export default {
  seogetdata() {
    return API.get(seoget(get));
  },
};
