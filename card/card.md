<!-- [Cards](./card/card.html) or  -->

| <a href="../readme.md">Return to Documentation</a> <br> <br>Code Below | ![Alt text](./card.png "Card Img") |
| ---------------------------------------------------------------------- | ---------------------------------- |

<a href="./card.html" target="blank">VIEW CARD</a>

```
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
         <!-- needed for mobile first -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<title>Login Card</title>

		<!-- STYLES -->
		<style>
			/* REMOVES DEFAULT BROWSER MARGINS AND PADDINGS */
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			body {
				font-family: "Arial", sans-serif;
				background-color: #f4f4f4;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100vh;
				background-color: rgb(022 52 024 / 0.5);
			}

			.login-card {
				background-color: white;
				border-radius: 10px;
				padding: 20px;
				box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
				width: 300px;
			}

			h2 {
				text-align: center;
				margin-bottom: 20px;
			}

			.input-container {
				margin-bottom: 15px;
			}

			label {
				display: block;
				font-weight: bold;
				margin-bottom: 5px;
			}

			input {
				width: 100%;
				padding: 10px;
				border: 1px solid #ddd;
				border-radius: 5px;
			}

			button {
				width: 100%;
				padding: 10px;
				background-color: #4caf50;
				color: white;
				border: none;
				border-radius: 5px;
				cursor: pointer;
				font-size: 16px;
			}

			button:hover {
				background-color: #45a049;
			}

			.signup-text {
				text-align: center;
				margin-top: 10px;
			}

			.signup-text a {
				color: #4caf50;
				text-decoration: none;
				font-weight: bold;
			}

			.signup-text a:hover {
				text-decoration: underline;
			}

			.nav {
				margin-bottom: 50px;
			}
		</style>
	</head>
	<body>
		<!--  this stack div is to add a button back to home -->
		<div class="stack">
			<div class="nav">
				<button id="home">back to home</button>
			</div>

			<!-- This div below is used with the css style above to create a basic login card - you will need your own JS to make it work-->
			<div class="login-card">
				<h2>Login</h2>
				<form action="#">
					<div class="input-container">
						<label for="username">Username</label>
						<input type="text" id="username" name="username" required />
					</div>
					<div class="input-container">
						<label for="password">Password</label>
						<input type="password" id="password" name="password" required />
					</div>
					<button type="submit">Login</button>
					<p class="signup-text">Don't have an account? <a href="#">Sign up</a></p>
				</form>

				<!-- <div>
					<button id="home" style="margin-top: 50px">back to home</button>
				</div> -->
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
