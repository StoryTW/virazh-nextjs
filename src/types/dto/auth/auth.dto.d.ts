declare interface SignUpDto {
  email: string;
  password: string;
  name: string;
  password_confirmation: string;
}

declare interface SignInDto {
  email: string;
  password: string;
}

declare interface ChangePasswordDto {
  old_password: string;
  new_password: string;
}
