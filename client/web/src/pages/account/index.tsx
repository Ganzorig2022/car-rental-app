import { loggedInState } from '@/atoms/loginAtom';
import Layout from '@/components/Account/Layout';
import Admin from '@/components/Account/admin/Admin';
import User from '@/components/Account/user/User';
import Spinner from '@/components/UI/Spinner';
import useGraphql from '@/hooks/useGraphql';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRecoilValue } from 'recoil';

type Props = {};

const Account = (props: Props) => {
  const { getUserByID, getUserByIdLoading } = useGraphql();
  const [userData, setUserData] = useState<UserData>();
  const loggedIn = useRecoilValue(loggedInState);
  const router = useRouter();

  // 1) when page first renders, fetch user data from server
  useEffect(() => {
    (async () => {
      const id = Cookies.get('userId');
      const response = await getUserByID(id!);

      if (response?.email !== '') {
        setUserData({ ...response });
      }
      if (!response) toast.error('No user data found');
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2) when user log out, will be kicked to Home Page
  useEffect(() => {
    if (!loggedIn) router.push('/');
  }, [loggedIn, router]);

  if (getUserByIdLoading) return <Spinner />;

  return (
    <div className=''>
      <Layout>
        {userData?.role === 'admin' && <Admin />}
        {userData?.role === 'user' && <User />}
      </Layout>
    </div>
  );
};

export default Account;
