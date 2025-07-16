function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`container max-w-[90%] xl:max-w-[1064px] 2xl:max-w-[1264px] mx-auto ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Container;
