export default function Footer () {
	const styles = `
	#footer {
		color: #333;
		padding: 20px;
		text-align: center;
		font-weight: bold;
	}

	#footer a {
		color: #333;
		text-decoration: none;
	}

	#footer a:hover {
		color: #000;
		text-decoration: underline;
	}
	`;

	return (
		<footer id="footer">
			<style>{styles}</style>
			<p>Génération possible grâce à la librairie 
				<a href="https://www.npmjs.com/package/qrcode.react"> QRCode React</a>
			</p>
		</footer>
	);
}