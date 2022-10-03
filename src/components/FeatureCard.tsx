import cn from "classnames";
import GradientContainer from "./GradientContainer";
import { Cal, Category, Eye } from "./Icons";

const tabs = [
  {
    Icon: <Category />,
    text: "Category",
  },
  {
    Icon: <Cal />,
    text: "Date",
  },
  {
    Icon: <Eye />,
    text: "Views",
  },
];

export const Tabs: React.FC = () => (
  <div className="mt-8 flex items-center gap-6">
    {tabs.map(tab => (
      <div className="flex items-center md:gap-2" key={tab.text}>
        {tab.Icon}
        <span className="text-[#A7A9AC]">{tab.text}</span>
      </div>
    ))}
  </div>
);

const FeatureCard: React.FC<{ gradient: string }> = ({ gradient }) => {
  return (
    <GradientContainer
      gradient={gradient}
      className="px-3 pt-4 pb-4 md:px-8 md:pt-6 md:pb-8"
    >
      <h3 className="text-2xl font-semibold text-[#E6E6E6]">Title</h3>
      <p className="text-xl text-[#D1D2D3]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare
        augue sit amet ipsum congue tincidunt. Nam eu ultrices ex, eget dictum
        odio.
      </p>

      <Tabs />
    </GradientContainer>
  );
};

export default FeatureCard;
