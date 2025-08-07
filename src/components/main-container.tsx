type MainContainerProps = {
  children: React.ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="flex flex-col min-w-screen min-h-screen">{children}</div>
  );
}
