export default function PokeStats({ sprites }) {
    return (
        <div>
            <p>
                <img src={sprites?.front_default} alt="Front-default" />
                <img src={sprites?.back_default} alt="Back-default" />
            </p>
            <p>
                <img src={sprites?.front_shiny} alt="Front-shiny" />
                <img src={sprites?.back_shiny} alt="Back-shiny" />
            </p>
        </div>
	);
}
