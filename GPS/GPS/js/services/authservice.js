class AuthService {
  static instance = null;

  constructor() {
    if (AuthService.instance) {
      return AuthService.instance;
    }
    AuthService.instance = this;
    this.validUser = "aluno@facul.com";
    this.validPass = "123456";
  }

  login(email, password) {
    if (email === this.validUser && password === this.validPass) {
      localStorage.setItem("isAuthenticated", "true");
      return { success: true, message: "Login bem-sucedido!" };
    } else {
      return { success: false, message: "Email ou senha inválidos." };
    }
  }

  isAuthenticated() {
    return localStorage.getItem("isAuthenticated") === "true";
  }

  logout() {
    localStorage.removeItem("isAuthenticated");
  }
}
