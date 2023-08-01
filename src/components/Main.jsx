import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import { toPng } from 'html-to-image';

function QRCodeGenerator() {
	const styles = `
	* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	}
	
	/* Appliquer une police de caractères par défaut */
	body {
	font-family: Arial, sans-serif;
	line-height: 1.6;
	}
	
	/* Centrer le contenu de la page */
	.container {
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
	background-color: #ffffff;
	border-radius: 6px;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
	}
	
	h1 {
	text-align: center;
	margin-bottom: 20px;
	}
	
	label {
	display: block;
	font-weight: bold;
	margin-bottom: 10px;
	}
	
	input[type="text"] {
	width: 100%;
	padding: 10px;
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-bottom: 20px;
	}
	
	button {
	display: block;
	width: 100%;
	padding: 10px;
	background-color: #3498db;
	color: #ffffff;
	border: none;
	border-radius: 4px;
	font-size: 16px;
	cursor: pointer;
	}
	
	button:hover {
	background-color: #2980b9;
	}
	
	button:active {
	background-color: #1f6fab;
	}

	#generate-button {
		margin-bottom: 20px;
	}
	
	/* Style pour le bouton de téléchargement */
	#download-button {
	display: block;
	width: 100%;
	margin-top: 20px;
	padding: 10px;
	background-color: #3498db;
	color: #ffffff;
	border: none;
	border-radius: 4px;
	font-size: 16px;
	cursor: pointer;
	}
	
	#download-button:hover {
	background-color: #2980b9;
	}
	
	#download-button:active {
	background-color: #1f6fab;
	}
	`;

	const [link, setLink] = useState('');
	const [isQRCodeGenerated, setIsQRCodeGenerated] = useState(false);
	const qrcodeRef = useRef(null);

	const generateQRCode = () => {
		if (link.trim() === '') {
		alert("Veuillez entrer un lien valide");
		return;
		}

		setIsQRCodeGenerated(true);
	};

	const downloadQRCode = () => {
		if (!isQRCodeGenerated) {
		alert("Veuillez générer le QR Code avant de le télécharger.");
		return;
		}

		if (qrcodeRef.current) {
		toPng(qrcodeRef.current)
			.then((dataUrl) => {
			const link = document.createElement('a');
			link.download = 'QR_Lien.png';
			link.href = dataUrl;
			link.click();
			})
			.catch((error) => {
			console.error('Erreur lors de la conversion en image :', error);
			});
		}
	};

	return (
		<div className="container">
		<h1>Générateur de QR Code</h1>
		<style>{styles}</style>
		<label htmlFor="link">Entrez un lien :</label>
		<input type="text" id="link" value={link} onChange={(e) => setLink(e.target.value)} />
		<button onClick={generateQRCode} id="generate-button">Générer le QR Code</button>

		<div id="qrcode" ref={qrcodeRef}>
			{isQRCodeGenerated && <QRCode value={link} size={256} />}
		</div>

		<button id="download-button" onClick={downloadQRCode} disabled={!isQRCodeGenerated}>
			Télécharger le QR Code
		</button>
		</div>
	);
}

export default QRCodeGenerator;