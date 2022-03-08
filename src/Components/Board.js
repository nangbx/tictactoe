import React from "react";
import Cell from "./Cell";

export default function Board({ cells, turn, onClick }) {
	return (
		<div className='board-game'>
			{cells.map((item, index) => (
				<Cell
					key={index}
					value={cells[index]}
					onClick={() => onClick(index)}
					className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
				/>
			))}
		</div>
	);
}
