import cn from "classnames";
import GradientContainer from "./GradientContainer";

const SnippetCard: React.FC<{ gradient: string }> = ({ gradient }) => {
  return (
    <GradientContainer
      gradient={gradient}
      className="flex flex-col space-y-4 p-6"
    >
      <DummuBox />
      <div>
        <h3 className="text-base font-semibold text-[#E6E6E6]">Validate Env</h3>
        <p className="text-sm text-[#D1D2D3]">For validating env's</p>
      </div>
    </GradientContainer>
  );
};

const DummuBox = () => (
  <svg
    width="49"
    height="48"
    viewBox="0 0 49 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.500977" width="48" height="48" rx="12" fill="#23262F" />
  </svg>
);

export default SnippetCard;
