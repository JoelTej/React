const ListItem = ({ imdbID, Poster, Title, onListItemClick }) => {

    const handleListItemClick = () => {
        onListItemClick(imdbID);
    };

    return (
        <div key={imdbID} className="flex flex-row w-full mt-16" style={{ minWidth: 650 }}>
            <div className="w-1/6">
                <img src={Poster} alt={Title} className="w-32" />
            </div>
            <div className="w-5/6 flex flex-col items-start py-1 px-4">
                <p className="font-lato text-3xl">{Title ?? "Sin titulo"}</p>
                <div className="flex h-full items-end">
                    <button
                        className="font-lato border-2 border-red-400 rounded-md w-48 h-10 text-xl text-red-400 hover:bg-red-400 hover:text-white"
                        onClick={handleListItemClick}
                    >
                        Ver mas
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ListItem;