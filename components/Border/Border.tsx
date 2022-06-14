import { Link } from "react-router-dom";

interface BorderProps {
  border: string;
}

const Border = ({ border }: BorderProps) => {
  return (
    <div className="transition duration-300 ease-in-out cursor-pointer transform hover:scale-110 px-8 py-2 text-xs bg-elements shadow-lg text-primary sm:flex-row">
      <span>{border}</span>
    </div>
  );
};

export default Border;
