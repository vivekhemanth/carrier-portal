import React from 'react';
import { FaFacebookF } from "react-icons/fa";

const SocialSignUpButtons: React.FC = () => (
  <div className="flex flex-col gap-1">
    <button
      className="btn flex justify-center items-center gap-2 px-2 py-2 bg-[#4267B2] text-white rounded-lg hover:bg-[#365899]"
    >
      <FaFacebookF className="text-white" />
      Sign up with Facebook
    </button>
  </div>
);

export default React.memo(SocialSignUpButtons);
