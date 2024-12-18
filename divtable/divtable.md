<!-- [Cards](./card/card.html) or  -->

| <a href="../readme.md">Return to Documentation</a> <br> <br>Code Below | ![Alt text](./divtable.png "DivTable Img") |
| ---------------------------------------------------------------------- | ------------------------------------------ |

<a href="./divtable.html" target="blank">VIEW DIV TABLE</a>

```
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<!-- needed for mobile first -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<title>DIV TABLE</title>

		<style>
			/* Basic table styling for desktop */
			.table {
				display: table;
				width: 100%;
				border-collapse: collapse;
			}

			.row {
				display: table-row;
			}

			.cell {
				display: table-cell;
				/* border: 1px solid #ddd; */
				border: 1px solid blue;
				padding: 8px;
				text-align: left;
			}

			.header-card {
				display: none;
			}

			.header {
				display: table-row;
				background-color: #f2f2f2;
				/* background-color: red; */
				font-weight: bold;
			}

			.header .cell {
				font-weight: bold;
				text-align: center;
			}

			/* For smaller screens (mobile) */
			@media (max-width: 600px) {
				.table {
					display: block;
				}

				.row {
					display: block;
					border: 1px solid #ddd;
					margin-bottom: 10px;
					border-radius: 8px;
					background-color: #f9f9f9;
					box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
				}

				.header {
					display: none; /* Hide the main table header on mobile */
				}

				.header-card {
					display: block;
					font-weight: bold;
					background-color: #4caf50;
					color: white;
					padding: 10px;
					text-align: center;
					border-radius: 8px 8px 0 0;
				}

				.cell {
					display: block;
					border: none;
					padding: 10px;
					text-align: left;
					border-bottom: 1px solid #eee;
				}

				.cell:last-child {
					border-bottom: none;
				}
			}
		</style>
	</head>
	<body>
		<div>
			<h1>Div Table</h1>
		</div>
		<button id="home">back to home</button>
		<hr />

		<h2>Responsive Table to Card</h2>
		<p><em>NOTE: Shrink the view port to see the changes</em></p>

		<div class="table">
			<!-- Table Header Row for Desktop View -->
			<div class="header">
				<div class="cell">Header 1</div>
				<div class="cell">Header 2</div>
				<div class="cell">Header 3</div>
			</div>

			<!-- Row 1 with its unique header for mobile -->
			<div class="row">
				<div class="header-card">Header 1</div>
				<!-- Unique header for Row 1 on mobile -->
				<div class="cell">Row 1, Cell 1</div>
				<div class="cell">Row 1, Cell 2</div>
				<div class="cell">Row 1, Cell 3</div>
			</div>

			<!-- Row 2 with its unique header for mobile -->
			<div class="row">
				<div class="header-card">Header 2</div>
				<!-- Unique header for Row 2 on mobile -->
				<div class="cell">Row 2, Cell 1</div>
				<div class="cell">Row 2, Cell 2</div>
				<div class="cell">Row 2, Cell 3</div>
			</div>

			<!-- Row 3 with its unique header for mobile -->
			<div class="row">
				<div class="header-card">Header 3</div>
				<!-- Unique header for Row 3 on mobile -->
				<div class="cell">Row 3, Cell 1</div>
				<div class="cell">Row 3, Cell 2</div>
				<div class="cell">Row 3, Cell 3</div>
			</div>

			<!-- Row 3 with its unique header for mobile -->
			<div class="row">
				<div class="header-card">Header 3</div>
				<!-- Unique header for Row 3 on mobile -->
				<div class="cell">Row 3, Cell 1</div>
				<div class="cell">Row 3, Cell 2</div>
				<div class="cell">Row 3, Cell 3</div>
			</div>

			<!-- Row 3 with its unique header for mobile -->
			<div class="row">
				<div class="header-card">Header 3</div>
				<!-- Unique header for Row 3 on mobile -->
				<div class="cell">Row 3, Cell 1</div>
				<div class="cell">Row 3, Cell 2</div>
				<div class="cell">Row 3, Cell 3</div>
			</div>

			<!-- Row 3 with its unique header for mobile -->
			<div class="row">
				<div class="header-card">Header 3</div>
				<!-- Unique header for Row 3 on mobile -->
				<div class="cell">Row 3, Cell 1</div>
				<div class="cell">Row 3, Cell 2</div>
				<div class="cell">Row 3, Cell 3</div>
			</div>
		</div>
	</body>
</html>

<script>
	document.getElementById("home").addEventListener("click", () => {
		window.location.href = "../index.html";
	});
</script>

```
