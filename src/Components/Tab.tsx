import { ITab } from "Interfaces/Components-Interfaces/tab";

interface IProps {
  children: ITab[];
  onClick: (id: number) => void;
  activeTabId: number;
}

const Tab = ({ children, activeTabId, onClick }: IProps) => {
  const renderChild = (child: ITab) => (
    <div
      key={child.id}
      className={`title-medium text-center border-b-2 py-3 w-full cursor-pointer transition-all duration-300 ${
        child.id === activeTabId
          ? "text-red-02 border-red-02"
          : "text-on-surface border-borderColor"
      }`}
      onClick={() => onClick(child.id)}
    >
      {child.title}
    </div>
  );

  return (
    <div className="flex flex-row justify-start items-center w-full">
      {children.map(renderChild)}
    </div>
  );
};

export default Tab;
