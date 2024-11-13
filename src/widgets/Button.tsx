export const Button: React.FC<HTMLButtonElement> = (props) => {
  return (
    <button  {...props} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
  );
}
