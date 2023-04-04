import { createContext, useState, useContext } from "react";
import Modal from "../components/Modal";

interface UseModalProps {
  defaultIsOpen?: boolean;
}

interface ModalContextData {
  openModal: () => void;
  closeModal: () => void;
  ModalWrapper: React.FC<any>;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const useModal = ({ defaultIsOpen = false }: UseModalProps = {}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const ModalWrapper = ({ title, children }: any) => (
    <Modal isOpen={isOpen} onClose={closeModal} title={title}>
      {children}
    </Modal>
  );

  return {
    openModal,
    closeModal,
    ModalWrapper,
  };
};

const useModalContext = () => useContext(ModalContext);

export { useModal, useModalContext, ModalContext };
