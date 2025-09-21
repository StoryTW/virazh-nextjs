import { api } from '@/config/axios.config';

export const AuthService = {
  async signUp(data: SignUpDto) {
    return await api.post<SignUpModel>('/account/sign-up', data);
  },

  async signIn(data: SignInDto) {
    return await api.post<SignInModel>('/account/sign-in', data);
  },

  async changePassword(data: ChangePasswordDto) {
    return await api.post<ChangePasswordModel>('/change/password', data);
  },

  async logout() {
    return await api.post<LogoutModel>('/logout');
  },
};
