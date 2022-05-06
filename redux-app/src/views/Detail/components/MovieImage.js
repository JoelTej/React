const MovieImage = ({ image }) => (
    <div className="w-1/3 flex justify-center">
        <img src={image} alt="movie-detail" className="w-80" />
    </div>
);

export default MovieImage;