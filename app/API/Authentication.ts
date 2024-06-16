import axios from "axios";
import { useApp } from "@/Helpers/AccountDialog"; // Adjust the import path as necessary
import { useRouter } from 'next/navigation'
import { useAppDispatch } from "../hooks";
import { setDefaultAccount } from "@/features/UIUpdates/UserAccount";
import Cookies from 'js-cookie';
const url= process.env.NEXT_PUBLIC_BACKEND_URL;
const useAuth = () => {
  const { toggleLoggedIn, toggleIsIncorrect, toggleIsExists, toggleServerError } = useApp();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const checkLogin = async (form: { email: string; password: string }, remember: boolean) => {
    const data = {
      email: form.email,
      password: form.password,
    };
    try {
      const res = await axios.post(`${url}/api/user/signin/${remember}`, data, {
        headers: { Authorization: process.env.NEXT_PUBLIC_AUTH_KEY },
      });
      switch (res.status) {
        case 200:
          try {
            const data = {userID:res.data.userData.userID,userName:res.data.userData.userName,email:res.data.userData.email,mobile_number:res.data.userData.mobile_number,dob:res.data.userData.dob};
            dispatch(setDefaultAccount(data));
            toggleLoggedIn();
            remember &&  Cookies.set('sessionhold',res.data.token, {secure:true,expires:7});
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
    const data = {
      userName: form.userName,
      email: form.email,
      password: form.password,
      mobile_number: form.mobile_number,
      dob: form.dob,
    };
    try {
      const res = await axios.post(`${url}/api/user/signup/${promotional}`, data, {
        headers: { Authorization: process.env.NEXT_PUBLIC_AUTH_KEY },
      });
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
