import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default class AuthService {
  static async login(email: string, password: string) {
    const auth = getAuth();
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  }
}
