import PropTypes from "prop-types";

const Card = ({
  position,
  timing,
  location,
  keywords,
  company,
  companyLogo,
  postedOn,
  selectedKeywords,
  setSelectedKeywords,
}) => {
  const getRelativeTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return `${years}y ago`;
    }

    if (months > 0) {
      return `${months}mth ago`;
    }

    if (weeks > 0) {
      return `${weeks}w ago`;
    }

    if (days > 0) {
      return `${days}d ago`;
    }

    if (hours > 0) {
      return `${hours}h ago`;
    }

    if (minutes > 0) {
      return `${minutes}m ago`;
    }

    return `${seconds}s ago`;
  };

  return (
    <>
      <div className="grid grid-cols-6 gap-4 h-auto px-8 py-8 my-8 mx-auto bg-white border rounded-md shadow-lg space-y-2 items-center">
        <img
          className="block mx-auto w-24 rounded-full"
          src={companyLogo}
          alt={company}
        />

        <div className="col-span-3 space-y-2 text-left">
          <p className="font-bold text-lg">{company}</p>
          <p className="text-md text-xl font-bold">{position}</p>
          <p className="font-normal">
            {getRelativeTime(Date.now() - postedOn)} • {timing} • {location}
          </p>
        </div>

        <div className="col-span-2 flex justify-end text-right">
          <div className="inline-block">
            {keywords.map((keyword, index) => (
              <button
                key={index}
                className="px-4 py-1 mx-1 my-1 text-sm text-gray-500 tracking-wider font-bold rounded-full border border-gray-600 hover:text-white hover:bg-gray-600 hover:border-transparent"
                onClick={() =>
                  setSelectedKeywords(new Set([...selectedKeywords, keyword]))
                }
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

Card.propTypes = {
  position: PropTypes.string.isRequired,
  timing: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  keywords: PropTypes.array.isRequired,
  company: PropTypes.string.isRequired,
  companyLogo: PropTypes.string.isRequired,
  postedOn: PropTypes.number.isRequired,
  selectedKeywords: PropTypes.instanceOf(Set).isRequired,
  setSelectedKeywords: PropTypes.func.isRequired,
};
