export default function PokeStats({ stats }) {
	return (
		<>
			{stats?.map(({ stat, base_stat }, index) => (
				<div key={index} style={{ marginLeft: "5px" }}>
					<h3>{` ${stat.name.toUpperCase()} `}</h3>
					{`${base_stat}`}
				</div>
			))}
		</>
	);
}

