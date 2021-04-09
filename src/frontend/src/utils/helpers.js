import Reevalidate from "ree-validate";

export const Revalidate = (values) => new Reevalidate(values);

// check if authenticated
export const isAuth = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  // check if token expired
  return !!token && !(token.expires_in < Date.now / 1000);
};
