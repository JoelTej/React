import Rating from "./Rating";
import Genre from "./Genre";
import Cast from "./Cast";

const RightContainer = ({ title, year, rating, plot, cast, genre }) => {
    return (
        <div className="flex flex-col w-2/3 items-start overflow-y-auto my-16 justify-center">
            <h2 className="text-4xl font-bold my-1">
                {`${title} (${year})`}
            </h2>
            <Rating rating={rating} />
            <p className="text-left">{plot}</p>
            <Genre genre={genre} />
            <Cast cast={cast} />
        </div>
    );
};

export default RightContainer;