function tableFactory(state) {
	const temps = document.querySelectorAll("template");
	const tableRowTemp = temps[4];
	const node = document.createElement("table");
	const headRowTemp = temps[6];
	const headRow = headRowTemp.content.querySelector("tr");
	const headRowNode = document.importNode(headRow, true);
	const lastRowTemp = temps[5];
	const lastRow = lastRowTemp.content.querySelector("tr");
	const lastRowNode = document.importNode(lastRow, true);
	node.appendChild(headRowNode);
	let tableRows = [];

	function render() {
		removeNodes();
		state.books
			.filter((book) => book.number > 0)
			.forEach((book) => {
				const tableRow = tableRowTemp.content.querySelector("tr");
				const tableRowNode = document.importNode(tableRow, true);
				for (let key in book) {
					const dataNode = tableRowNode.querySelector("." + key.toLowerCase());
					if (dataNode) {
						dataNode.textContent = book[key];
					}
				}
				tableRows.push(tableRowNode);
			});
		const totalPriceNode = lastRowNode.querySelector(".totalprice");
		totalPriceNode.textContent = state.totalPrice.toFixed(2);
		tableRows.push(lastRowNode);
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
