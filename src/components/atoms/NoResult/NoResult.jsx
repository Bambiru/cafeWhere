function NoResult({ children }) {
  return (
    <div className="mt-[50%] flex flex-col items-center justify-center">
      <img src="/cup.png" alt="빈 컵" className="mx-auto w-120pxr" />
      <p>{children}</p>
    </div>
  );
}

export default NoResult;
