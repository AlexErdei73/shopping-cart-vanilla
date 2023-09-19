function tableFactory(state) {
	const temps = document.querySelectorAll("template");
	const tableRowTemp = temps[4];
	const node = document.createElement("table");
	const headRowTemp = temps[6];
	const headRow = headRowTemp.content.querySelector("tr");
	const headRowNode = document.importNode(headRow, true);
	node.appendChild(headRowNode);
	let tableRows = [];

	function render() {
		console.log("render runs");
		removeNodes();
		state.books
			.filter((book) => book.number > 0)
			.forEach((book) => {
				const tableRow = tableRowTemp.content.querySelector("tr");
				const tableRowNode = document.importNode(tableRow, true);
				console.log(book);
				for (let key in book) {
					const dataNode = tableRowNode.querySelector("." + key.toLowerCase());
					console.log(dataNode);
					console.log(book[key]);
					if (dataNode) {
						dataNode.textContent = book[key];
					}
				}
				tableRows.push(tableRowNode);
			});
		appendRows();
	}

	function removeNodes() {
		tableRows.forEach((rowNode) => {
			rowNode.remove();
		});
		tableRows = [];
	}

	function appendRows() {
		tableRows.forEach((rowNode) => node.appendChild(rowNode));
	}

	return { node, render };
}

export default tableFactory;
