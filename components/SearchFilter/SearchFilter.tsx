import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { openStdin } from "process";

type SearchFilterProps = {
  selectedRegion: string;
  setSelectedRegion: (text: string) => void;
};

const regions = [
  "Filter by Region",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
];

const SearchFilter = ({
  selectedRegion,
  setSelectedRegion,
}: SearchFilterProps) => {
  return (
    <div className="pt-8 mt-2 pl-4 pr-5">
      <div className="cursor-pointer w-48">
        <select
          className="pb-4 pt-5 pl-4 pr-4 font-sans shadow-md "
          name="region"
          id="region"
          value={selectedRegion}
          onChange={(event) => setSelectedRegion(event.target.value)}
        >
          {regions.map((c) => {
            return (
              <option key={c} value={c}>
                {c}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
