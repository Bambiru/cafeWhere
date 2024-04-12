// import Divider from '@/components/atoms/Divider/Divider';
import {
  HeaderBar,
  Divider,
  LoginButton,
  SignUpLink,
  SocialLoginButton,
} from '@/components/atoms';
import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

function SelectLoginPage() {
  const navigate = useNavigate();

  const handleLoginPage = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="flex h-full min-h-svh flex-col justify-center">
      <HeaderBar showHomeBtn />
      <div className="my-auto flex w-full flex-col">
        <div className="flex justify-center ">
          <img
            className="pb-10"
            src="/images/biglogo2.svg"
            alt="카페어디 빅사이즈 로고"
          />
        </div>

        <div className="flex flex-col">
          <div onClick={handleLoginPage} className="mx-5">
            <LoginButton>로그인</LoginButton>
          </div>
          <Divider />
          <SocialLoginButton />
          <SignUpLink />
        </div>
      </div>
    </div>
  );
}

export default SelectLoginPage;
