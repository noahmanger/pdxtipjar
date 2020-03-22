import React, { useEffect, createRef } from "react";

export default function Modal({ content, closeModal }) {
  // Hide overflow on body when modal open
  useEffect(() => {
    document.body.classList.add("is-clipped");
    return () => document.body.classList.remove("is-clipped");
  });

  // A11y
  // From https://levelup.gitconnected.com/how-to-create-an-accessible-react-modal-5b87e6a27503
  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  });

  // Trap focus in modal
  const modalRef = createRef();
  const handleTabKey = e => {
    const focusableModalElements = modalRef.current.querySelectorAll(
      "a[href], button"
    );
    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

    if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      return e.preventDefault();
    }

    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  // Close modal on escape
  const keyListenersMap = new Map([
    [27, closeModal],
    [9, handleTabKey],
  ]);

  // Focus on close
  useEffect(() => {
    const previousActiveElement = document.activeElement;
    modalRef.current.querySelectorAll("button")[0].focus();
    return () => previousActiveElement.focus();
  });

  return (
    <div
      className="modal is-active"
      role="dialog"
      aria-modal="true"
      ref={modalRef}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="modal-content">
        <button
          className="modal-button"
          aria-label="close"
          title="Close"
          onClick={closeModal}
        ></button>
        {content}
      </div>
    </div>
  );
}
