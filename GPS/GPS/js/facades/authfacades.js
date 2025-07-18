class AuthFacade {
  static instance = null;

  constructor() {
    if (AuthFacade.instance) {
      return AuthFacade.instance;
    }
    AuthFacade.instance = this;
    this.authService = new AuthService();
  }

  login(email, password) {
    return this.authService.login(email, password);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
  }
}
