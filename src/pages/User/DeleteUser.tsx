import { useModal } from "../../hooks/useModal";

export default ({ id }: any) => {
  const { openModal, closeModal, ModalWrapper } = useModal();

  return (
    <>
      <button className="custom--btn-danger" onClick={() => openModal()}>
        Delete
      </button>
      <ModalWrapper title="New User">
        <span>Are you sure you want remover?</span>
        <span>{id}</span>
        <button
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => closeModal()}
        >
          Save
        </button>
      </ModalWrapper>
    </>
  );
};
