import React, { useState } from "react";
import Board from "./Board";
import "./Game.css";
const isWinner = (cells) => {
	const row = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < row.length; i++) {
		const [a, b, c] = row[i];
		if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
			return cells[a];
		}
	}
	return null;
};
const isDraw = (cells) => {
	return cells.every((value, index) => {
		return value;
	});
};

export default function Game() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [turn, setTurn] = useState(true);
	const winner = isWinner(board);
	const handleOnClick = (index) => {
		let T = board;
		if (winner || T[index]) {
		} else {
			T[index] = turn ? "X" : "O";
			setBoard(T);
			setTurn((prev) => !prev);
		}
	};
	const handleReset = () => {
		setBoard(Array(9).fill(null));
		setTurn(true);
	};
	return (
		<div className='game'>
			<h1>Game XO</h1>
			<Board cells={board} celss={board} onClick={handleOnClick} />
			{winner && <h5 className='game-winner'>Winner is {winner}</h5>}
			{isDraw(board) && <h5 className='game-winner'>Draw</h5>}
			<button className='game-reset' onClick={handleReset}>
				Reset
			</button>
		</div>
	);
}
