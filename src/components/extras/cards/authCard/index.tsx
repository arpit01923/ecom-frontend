import React from "react";

interface Props {
  children: React.ReactNode;
}
const AuthCard: React.FC<Props> = ({ children }) => {
  return (
    <div className="rounded-10 grid grid-cols-1 md:grid-cols-2 w-full md:w-800 md:h-475 shadow-primaryShadow overflow-auto">
      <img
        src="https://images.unsplash.com/photo-1673111143940-c49720254f77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="signin-image"
        className="w-full h-full "
      />
      <div className="px-5 py-2 flex gap-2 flex-col">{children}</div>
    </div>
  );
};

export default AuthCard;
