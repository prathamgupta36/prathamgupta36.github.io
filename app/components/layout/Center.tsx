export default function Center({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`flex justify-center ${className}`}>{children}</div>;
}