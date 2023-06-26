import PropTypes from "prop-types";

const Filter = ({ selectedKeywords, setSelectedKeywords }) => (
  <div className="flex flex-row gap-4 px-16 pt-6 h-18 mx-auto mt-8 tracking-wider bg-white rounded-md border shadow-xl">
    {Array.from(selectedKeywords).map((selectedKeyword, index) => (
      <div
        key={index}
        className="flex items-center shadow-sm rounded-md mb-5 text-gray-500 font-bold"
        role="group"
      >
        <span className="rounded-l-lg border border-gray-200 bg-white text-sm px-4 py-2">
          {selectedKeyword}
        </span>
        <button
          type="button"
          className="rounded-r-md border border-gray-200 bg-white text-sm px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700"
          onClick={() =>
            setSelectedKeywords(
              (prevSelectedKeywords) =>
                new Set(
                  [...prevSelectedKeywords].filter(
                    (prevSelectedKeyword) =>
                      prevSelectedKeyword !== selectedKeyword
                  )
                )
            )
          }
        >
          X
        </button>
      </div>
    ))}

    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 py-2 px-4 ml-auto rounded-full"
      onClick={() => setSelectedKeywords(new Set())}
    >
      Close
    </button>
  </div>
);

export default Filter;

Filter.propTypes = {
  selectedKeywords: PropTypes.instanceOf(Set).isRequired,
  setSelectedKeywords: PropTypes.func.isRequired,
};
