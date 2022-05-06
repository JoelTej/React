const Genre = ({genre}) => {
    return (
        <div className="flex flex-row my-1">
            <span className="font-bold mr-1">Genero:</span>
            <span>{genre} </span>
        </div>
    );
}

export default Genre;


