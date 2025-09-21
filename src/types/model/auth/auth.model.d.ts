declare interface SignUpModel {
  access_token: string;
  refresh_token: string;
  expires_at: string;
}

declare interface SignInModel {
  access_token: string;
}

declare interface ChangePasswordModel {
  message: string;
}

declare interface LogoutModel {
  message: string;
}
