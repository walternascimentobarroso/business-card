interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 ${
        isOpen ? "" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div
        className={`bg-white rounded-lg w-full max-w-md p-6 z-10 transform transition-all
        duration-500 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="mb-4">
          <h2 className="text-lg font-medium">{title}</h2>
        </div>
        <div>{children}</div>
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
