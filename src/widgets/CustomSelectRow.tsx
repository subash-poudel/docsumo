interface OptionProps {
    label: string;
    description: string;
}

export const CustomSelectRow: React.FC<OptionProps> = ({ label }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-200">
      <div className="flex-1">
        <p className="text-lg font-medium">{label}</p>
      </div>
    </div>
  );
};
