export default ({ typeOf = "button", children, onClick }: any) => {
  return (
    <button className="custom--btn-primary" type={typeOf} onClick={onClick}>
      {children}
    </button>
  );
};
