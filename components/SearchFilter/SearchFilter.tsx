import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { openStdin } from "process";

type SearchFilterProps = {
  selectedRegion: string;
  setSelectedRegion: (text: string) => void;
};

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

const SearchFilter = ({
  selectedRegion,
  setSelectedRegion,
}: SearchFilterProps) => {
  return (
    <div className="">
      <div className="">
        <FontAwesomeIcon icon={faChevronDown} className="text-primary" />
        <select
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
