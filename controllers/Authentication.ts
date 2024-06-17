import { useApp } from "@/Helpers/AccountDialog"; // Adjust the import path as necessary
import { useRouter } from 'next/navigation';
import { useAppDispatch } from "../app/hooks";
import { setDefaultAccount } from "@/features/UIUpdates/UserAccount";
import signInHandler from '@/app/api/signin';
import signUpHandler from '@/app/api/signup';
const useAuth = () => {
  const { toggleLoggedIn, toggleIsIncorrect, toggleIsExists, toggleServerError } = useApp();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const checkLogin = async (form: { email: string; password: string }, remember: boolean) => {
    try {
      // const res = await axios.post('/api/signin', { email: form.email, password: form.password, remember });
      const res = await signInHandler({email:form.email,password:form.password,remember})
      switch (res.status) {
        case 200:
          try {
            const data = {
              userID: res.data.userData.userID,
              userName: res.data.userData.userName,
              email: res.data.userData.email,
              mobile_number: res.data.userData.mobile_number,
              dob: res.data.userData.dob,
            };
            dispatch(setDefaultAccount(data));
            toggleLoggedIn();
            router.push('/');
          } catch (tokenError) {
            toggleServerError(); // Optionally, handle token verification errors differently
          }
          break;
        case 205:
          toggleIsIncorrect();
          break;
      }
    } catch (err) {
      toggleServerError();
    }
  };

  const registerUser = async (
    form: {
      userName: string;
      email: string;
      password: string;
      mobile_number: number;
      dob: string;
    },
    promotional: boolean
  ) => {
    try {
      const res = await signUpHandler(form,promotional);
      switch (res.status) {
        case 200:
          toggleLoggedIn();
          router.push('/');
          break;
        case 205:
          toggleIsExists();
          break;
      }
    } catch (err) {
      toggleServerError();
    }
  };

  return { checkLogin, registerUser };
};

export default useAuth;
