// https://upmostly.com/tutorials/modal-components-react-custom-hooks

import React, { useState, useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";

interface Props {
  isShowing: boolean;
  hide: VoidFunction;
  children: ReactNode;
  label?: string;
}

const Modal: React.FC<Props> = ({ isShowing, hide, children, label }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50" />
          <div
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto outline-none flex justify-center items-center"
          >
            <div>
              {children}
              <button
                type="button"
                className="modal-close-button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
