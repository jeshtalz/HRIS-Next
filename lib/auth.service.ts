import Cookies from "js-cookie";

class AuthService {

  public static saveAuthToken = (token: string, name: string) => {
    Cookies.set("token", token);
    Cookies.set("name", name);
  };

  public static getAuthToken = () => {
    const token = Cookies.get("token");
    console.log(token);
    return token;
  };


  public static removeAuthToken = () => {
    Cookies.remove("token");
    Cookies.remove("name");
  };
}

export default AuthService;
