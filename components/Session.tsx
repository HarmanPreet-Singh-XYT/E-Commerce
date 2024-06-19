import React,{useLayoutEffect} from 'react'
import userData from '@/controllers/userData';
import useAuth from '@/controllers/Authentication';
const Session = () => {
    const {checkSession} = useAuth();
    const { grabUserData } = userData();
    async function sync(){
      await checkSession();
      await grabUserData();
    }
    useLayoutEffect(() => {
      sync();
    }, []);
    return <></>
}

export default Session;