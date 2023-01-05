import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import { Content } from './components/Content';
import { Header } from './components/Header';

interface ModalProps {
  title: string;
  open: boolean;
  onClose(): void;
}

export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  title,
  children,
  open,
  onClose: closeHandler,
}) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className='modal-backdrop' onClick={closeHandler}>
      <div
        className='modal'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Header title={title} onClose={closeHandler} />
        <Content>{children}</Content>
      </div>
    </div>,
    document.body
  );
};
