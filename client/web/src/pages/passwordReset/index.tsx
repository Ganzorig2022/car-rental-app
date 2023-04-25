import React from 'react';
import { useRouter } from 'next/router';

const PasswordReset = () => {
  const router = useRouter();
  const { id, token } = router.query;

  return (
    <div>
      <p>UserId: {id}</p>
      <p>Token: {token}</p>
    </div>
  );
};

export default PasswordReset;
