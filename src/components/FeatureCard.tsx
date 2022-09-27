import cn from "classnames";
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

const Tab: React.FC<{
  Icon: JSX.Element;
  text: string;
}> = ({ Icon, text }) => (
  <div className="flex items-center gap-2">
    {Icon}
    <span className="text-[#A7A9AC]">{text}</span>
  </div>
);

const FeatureCard: React.FC<{ gradient: string }> = ({ gradient }) => {
  return (
    <div className={cn("w-full rounded-2xl bg-gradient-to-r p-1", gradient)}>
      <div className="rounded-xl bg-[#18181C] px-8 pt-6 pb-8">
        <h3 className="text-2xl font-semibold text-[#E6E6E6]">Title</h3>
        <p className="text-xl text-[#D1D2D3]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare
          augue sit amet ipsum congue tincidunt. Nam eu ultrices ex, eget dictum
          odio.
        </p>

        <div className="mt-8 flex items-center gap-6">
          {tabs.map(tab => (
            <Tab Icon={tab.Icon} text={tab.text} key={tab.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
