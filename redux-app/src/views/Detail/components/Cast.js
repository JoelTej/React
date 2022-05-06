const Cast = ({cast}) => {
    return (
        <div className="flex flex-row my-1">
            <span className="font-bold mr-1">Cast:</span>
            <span>{cast} </span>
        </div>
    );
}

export default Cast;