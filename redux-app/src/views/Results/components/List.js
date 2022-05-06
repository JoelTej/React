import ListItem from "./ListItem";

const List = ({ data, onListItemClick }) => {
    return data?.map(movie => <ListItem key={movie.imdbID} {...movie} onListItemClick={onListItemClick} />);
};

export default List;