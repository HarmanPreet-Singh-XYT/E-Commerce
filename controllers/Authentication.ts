import { useApp } from "@/Helpers/AccountDialog"; // Adjust the import path as necessary
import { useRouter } from 'next/navigation';
import { useAppDispatch } from "../app/hooks";
import { setDefaultAccount } from "@/features/UIUpdates/UserAccount";
import signInHandler from '@/app/api/signin';
import signUpHandler from '@/app/api/signup';
import sessionHandler from "@/app/api/sessionauth";
import authDataHandler from "@/app/api/googleAuth";
const useAuth = () => {
  const { toggleLoggedIn, toggleIsIncorrect, toggleIsExists, toggleServerError, setLoggedIn } = useApp();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const checkLogin = async (form: { email: string; password: string }, remember: boolean,setloading:React.Dispatch<React.SetStateAction<boolean>>) => {
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
            setloading(false);
            setLoggedIn(true);
            router.push('/');
          } catch (tokenError) {
            setloading(false);
            toggleServerError(); // Optionally, handle token verification errors differently
          }
          break;
        case 205:
          setloading(false);
          toggleIsIncorrect();
          break;
      }
    } catch (err) {
      setloading(false);
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
    promotional: boolean,
    setloading:React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      const res = await signUpHandler(form,promotional);
      switch (res.status) {
        case 200:
          setloading(false);
          setLoggedIn(true);
          router.push('/');
          break;
        case 205:
          setloading(false);
          toggleIsExists();
          break;
      }
    } catch (err) {
      toggleServerError();
    }
  };
  const checkSession = async () => {
      try {
        const res = await sessionHandler();
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
              setLoggedIn(true);
              return {success:true,data};
            } catch (tokenError) {
              // console.log('Login Failed')
              return {success:false};
            }
          case 500:
            // console.log('Server Error');
            return {success:false};
        }
      } catch (err) {
        return {success:false};
        // console.log("Login Failed");
      }
  };
  const checkAuthLogin = async (authCode:string,setloading:React.Dispatch<React.SetStateAction<boolean>>)=>{
    try {
      const res = await authDataHandler(authCode);
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
            setloading(false);
            setLoggedIn(true);
            router.push('/');
          } catch (tokenError) {
            toggleServerError(); // Optionally, handle token verification errors differently
          }
          break;
        case 205:
          setloading(false);
          toggleIsIncorrect();
          break;
      }
    } catch (error) {
      setloading(false);
      toggleServerError();
    }
    }
  return { checkLogin, registerUser, checkSession, checkAuthLogin };
};

export default useAuth;
