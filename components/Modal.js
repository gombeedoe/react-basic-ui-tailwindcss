import React, { useState } from 'react';

const Dialog = ({ triggerButton, dialogContent }) => {
  const [isHidden, toggleOpen] = useState(false);

  const openDialog = () => {
    toggleOpen(!isHidden);
  }

  const OpenButton = React.cloneElement(
    triggerButton,
    { onClick: openDialog },
  );

  // console.log(triggerButton);
  console.log(OpenButton);

  return (
    <div>
      {/* {triggerButton onClick=handleClick} */}
      {/* <OpenButton /> */}
      {
        React.cloneElement(
          triggerButton,
          { onClick: openDialog },
        )
      }
      {/* <button onClick={() => toggleOpen(!isHidden)}>the button</button> */}
      <div hidden={isHidden} className="fixed z-50 inset-0 bg-black bg-opacity-50">
        <div className="absolute inset-0 flex justify-center items-center" onClick={openDialog}>
          {dialogContent}
        </div>
      </div>
    </div>
  );
}

export default Dialog;