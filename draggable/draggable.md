<!-- [Cards](./card/card.html) or  -->

| <a href="../readme.md">Return to Documentation</a> <br> <br>Code Below | ![Alt text](.//draggable.png "Draggable Img") |
| ---------------------------------------------------------------------- | --------------------------------------------- |

<a href="./draggable.html" target="blank">VIEW DRAGGABLE</a>

```
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<!-- needed for mobile first -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />


		<!-- defer below will run AFTER html has been processed -->
		<!-- <script src="./script.js" defer></script> -->

		<title>Testing Draggables</title>

		<!-- STYLES -->
		<style>
			body {
				background-color: pink;
				margin: 0;
			}

			.container {
				background-color: #333;
				padding: 1rem;
				margin-top: 1rem;
			}

			.draggable {
				padding: 1rem;
				background-color: lightblue;
				border: 10px solid black;
				cursor: move;
			}

			.draggable.dragging {
				opacity: 0.5;
				border-top: 5px solid red;
			}
		</style>
	</head>
	<body>
		<h1>Testing Draggables</h1>

		<button id="home">back to home</button>
		<hr />

		<div class="container">
			<p class="draggable" draggable="true">1</p>
			<p class="draggable" draggable="true">2</p>
		</div>

		<div class="container">
			<div class="draggable" draggable="true">3</div>
			<div class="draggable" draggable="true">4</div>
		</div>

		<script>
			document.getElementById("home").addEventListener("click", () => {
				window.location.href = "../index.html";
			});
		</script>
		<script>
			// https://www.youtube.com/watch?v=jfYWwQrtzzY
			console.log("hello from script.js");

			const draggables = document.querySelectorAll(".draggable");

			const containers = document.querySelectorAll(".container");

			draggables.forEach((draggable) => {
				draggable.addEventListener("dragstart", () => {
					console.log("drag started");
					draggable.classList.add("dragging");
				});

				draggable.addEventListener("dragend", () => {
					console.log("drag ended");
					draggable.classList.remove("dragging");
				});
			});

			containers.forEach((container) => {
				container.addEventListener("dragover", (e) => {
					console.log("drag over");

					e.preventDefault(); // changes cursor to show you can drop

					const afterElement = getDragAfterElement(container, e.clientY);
					// console.log("afterElement", afterElement);

					const draggable = document.querySelector(".dragging");

					if (afterElement == null) {
						container.appendChild(draggable);
					} else {
						container.insertBefore(draggable, afterElement);
					}
				});
			});

			// drag and drop between containers
			function getDragAfterElement(container, y) {
				// get a list of all draggable elements but NOT the one being dragged in the current container
				const draggablElements = [...container.querySelectorAll(".draggable:not(.dragging)")];

				return draggablElements.reduce(
					(closest, child) => {
						const box = child.getBoundingClientRect();
						console.log("box", box);
						const offset = y - box.top - box.height / 2;
						console.log(offset);

						if (offset < 0 && offset > closest.offset) {
							return { offset: offset, element: child };
						} else {
							return closest;
						}
					},
					{ offset: Number.NEGATIVE_INFINITY }
				).element;
			}
		</script>
	</body>
</html>

```
