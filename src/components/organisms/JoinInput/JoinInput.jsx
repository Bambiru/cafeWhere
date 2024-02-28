import { InputField } from '@/components/molcules';
import { useState } from 'react';

const isEmail = (email) => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  return emailRegex.test(email);
};

/* 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 */
const isPassword = (password) => {
  const passwordRegex =
    /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

  return passwordRegex.test(password);
};
const isPhone = (phone) => {
  const phoneRegex = /^\d{10,11}$/;

  return phoneRegex.test(phone);
};
const isBirth = (birth) => {
  const birthRegex =
    /^(?:19|20)\d{2}\/?(0[1-9]|1[0-2]|09)\/?(0[1-9]|[12][0-9]|3[01])$/;

  return birthRegex.test(birth);
};

function JoinInput() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userInfo, setUserInfo] = useState({
    userEmail: '',
    userPassword: '',
    userName: '',
    userNickname: '',
    userPhone: '',
    userBirth: '',
  });

  return (
    <div className="mx-auto my-20 w-full min-w-320pxr max-w-620pxr px-6">
      <form>
        <InputField
          id="userEmail"
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          required
          message="이메일 형식에 맞게 입력해주세요."
          setUser={setUserEmail}
          validateInput={isEmail}
        />
        <InputField
          id="userPassword"
          label="비밀번호"
          type={passwordVisible ? 'text' : 'password'}
          placeholder="비밀번호를 입력해주세요."
          required
          message="특수문자를 포함하여 8~15자 이내로 입력해주세요."
          setUser={setUserPassword}
          validateInput={isPassword}
          passwordVisible={passwordVisible}
          setPasswordVisible={setPasswordVisible}
        />
        <InputField
          id="userPasswordChecked"
          label="비밀번호 재확인"
          type={passwordVisible ? 'text' : 'password'}
          placeholder="비밀번호를 입력해주세요."
          required
          message="비밀번호를 한 번 더 입력해주세요."
          setUser={setUserPassword}
          validateInput={isPassword}
          passwordVisible={passwordVisible}
          setPasswordVisible={setPasswordVisible}
        />
        <InputField
          id="userName"
          label="이름"
          type="text"
          placeholder="이름을 입력해주세요."
          setUser={setUserPassword}
        />
        <InputField
          id="userNickname"
          label="닉네임"
          type="text"
          placeholder="닉네임을 입력해주세요."
          setUser={setUserPassword}
          validateInput={isPassword}
        />
        <InputField
          id="userPhone"
          label="휴대전화"
          type="text"
          placeholder="- 제외하고 번호 입력"
          setUser={setUserPassword}
          validateInput={isPhone}
        />
        <InputField
          id="userBirth"
          label="생년월일"
          type="text"
          placeholder="YYYY / MM / DD"
          setUser={setUserPassword}
          validateInput={isBirth}
        />
      </form>
    </div>
  );
}

export default JoinInput;
