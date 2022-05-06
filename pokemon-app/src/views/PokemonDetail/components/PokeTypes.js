export default function PokeStats({ types }) {
	return (
		<>
			{types?.map(({ type }, index) => (
				<div key={index} style={{ marginLeft: "5px" }}>
					{type.name.toUpperCase()}
				</div>
			))}
		</>
	);
}

