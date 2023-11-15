import api from "../api/config";

class AuthService {
   static instance = new AuthService();

   login(body) {
      return api.post("/auth/signIn", body);
   }
}

export default AuthService.instance;
