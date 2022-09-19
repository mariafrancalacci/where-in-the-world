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
    <div className="select-none cursor-pointer relative w-7/12 sm:w-full sm:col-start-7 md:col-start-9 lg:col-start-10  xl:col-start-11 sm:col-end-13">
      <div className="cursor-pointer w-46">
        <select
          className="px-6 py-4 w-full rounded-md shadow-md flex justify-between content-center items-center "
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
