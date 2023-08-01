import styled from "styled-components";

import image from "../assets/QR_Lien.png";

export default function Profil() {
	return (
		<Section>
			<div className="profile">
				<img src={image} alt="QR Code" />
				<h2>KLS</h2>
				<p>Étudiant développeur</p>
				<div className="bio">
					<p>
						Étudiant en BUT Informatique, je suis passionné par le développement et plus particulièrement par le développement web.
						Je continue constamment à me former et j'ai acquis des compétences dans diverses technologies.
					</p>
				</div>
			</div>
		</Section>
	);
}

const Section = styled.section`
	margin-left: 18vw;
	padding: 2rem;
	height: 100%;
	background-color: cyan;
	border-radius: 10px;
	overflow: hidden;

	.profile {
		text-align: center;
	}

	.profile img {
		display: block;
		width: 20%;
		margin: 0 auto;
		margin-left: 45%;
	}

	.profile h2 {
		font-size: 1.5rem;
		font-weight: 500;
		color: #212121;
		margin-top: 1rem;
	}

	.profile p {
		font-size: 1.2rem;
		color: #757575;
		margin-bottom: 1rem;
	}

	.social-links {
		display: flex;
		justify-content: center;
		margin-top: 1rem;

		a {
			margin: 0 0.5rem;
			color: #212121;
			text-decoration: none;
			font-weight: 500;

			&:hover {
				color: #ffc107;
			}
		}
	}

	.bio {
		margin-top: 1rem;
		background-color: #212121;
		padding: 20px;
		border-radius: 5px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
	}

	@media (max-width: 1200px) {
		margin-left: 0;
		
		.profile img {
			width: 45%;
			margin-top: 2rem;
			margin-left: 40%;
		}
	}
`;