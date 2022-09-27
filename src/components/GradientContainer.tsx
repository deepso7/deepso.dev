import cn from "classnames";

const GradientContainer: React.FC<{
  children: React.ReactNode;
  gradient: string;
  className: string;
}> = ({ children, gradient, className }) => (
  <div className={cn("w-full rounded-2xl bg-gradient-to-r p-1", gradient)}>
    <div className={cn("rounded-xl bg-[#18181C]", className)}>{children}</div>
  </div>
);

export default GradientContainer;
