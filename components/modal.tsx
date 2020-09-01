import React, { useState, ReactNode } from "react";

interface Props {
  open: boolean;
  children: ReactNode;
}

// interface ModalState {
//   value: true | false;
// }

const Modal: React.FC<Props> = ({ open, children }) => {
  // const [isOpen, toggleOpen] = useState(open);

  // const openDialog = () => {
  //   toggleOpen(!isOpen);
  // };
  // console.log(isOpen);

  return (
    <div>
      <div hidden={!open} className="fixed z-50 inset-0 bg-black bg-opacity-50">
        <div className="absolute inset-0 flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
