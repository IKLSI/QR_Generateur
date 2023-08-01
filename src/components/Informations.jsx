import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import { toPng } from 'html-to-image';

function QRCodeGeneratorPersonalInfo() {
	const styles = `
	* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	}

	body {
		font-family: Arial, sans-serif;
		line-height: 1.6;
	}

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

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	const [socialMediaLink, setSocialMediaLink] = useState('');
	const [isQRCodeGenerated, setIsQRCodeGenerated] = useState(false);
	const [link, setLink] = useState(''); // Add link state for QR Code value
	const qrcodeRef = useRef(null);

	const generateQRCode = () => {
	if (
		firstName.trim() === '' ||
		lastName.trim() === '' ||
		phoneNumber.trim() === '' ||
		email.trim() === '' ||
		socialMediaLink.trim() === ''
	) {
		alert("Veuillez remplir tous les champs pour générer le QR Code.");
		return;
	}
	
	// Combine the personal info into a single string (you can use any format you prefer)
	const personalInfo = `${firstName} ${lastName}\nTéléphone : ${phoneNumber}\nE-mail : ${email}\nRéseau social : ${socialMediaLink}`;
	
	setIsQRCodeGenerated(true);
	setLink(personalInfo); // Use 'personalInfo' as the link value for the QR Code.
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
					link.download = 'QR_Infos.png';
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
			<style>{styles}</style>
			<h1>Générateur de QR Code</h1>
			<label htmlFor="first-name">Prénom :</label>
			<input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

			<label htmlFor="last-name">Nom :</label>
			<input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />

			<label htmlFor="phone">Téléphone :</label>
			<input type="text" id="phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

			<label htmlFor="email">E-mail :</label>
			<input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

			<label htmlFor="social-media">Lien de Réseau social :</label>
			<input type="text" id="social-media" value={socialMediaLink} onChange={(e) => setSocialMediaLink(e.target.value)} />

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

export default QRCodeGeneratorPersonalInfo;
