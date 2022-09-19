import Link from "next/link";

interface BorderProps {
  border: string;
}

const Border = ({ border }: BorderProps) => {
  return (
    <Link href={`/country/${border}`}>
      <button className="transition duration-300 ease-in-out cursor-pointer border border-slate-100 transform hover:scale-110 px-8 py-1 text-xs bg-elements shadow-md rounded-sm text-primary md:flex-row mt-1 mr-3 md:mr-0 md:mt-0">
        <span className="text-gray-700 font-normal">{border}</span>
      </button>
    </Link>
  );
};

export default Border;
