import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";

export default function Menu({ currentLink, setCurrentLink }) {
const [navbarState, setNavbarState] = useState(false);
const html = document.querySelector("html");

html.addEventListener("click", () => setNavbarState(false));

useEffect(() => {
	const sr = scrollreveal({
	origin: "left",
	distance: "80px",
	duration: 1000,
	reset: false,
	});

	sr.reveal(
	`
			.brand,
			.links>ul>li:nth-of-type(1),
			.links>ul>li:nth-of-type(2),
			.links>ul>li:nth-of-type(3),
			.links>ul>li:nth-of-type(4),
			.links>ul>li:nth-of-type(5),
			.links>ul>li:nth-of-type(6),
			.logout
			`,
	{
		opacity: 0,
		interval: 300,
	}
	);
}, []);

return (
	<>
	<Section>
		<div className="top">
		<div className="brand">
			<span>Générateur</span>
		</div>
		<div className="toggle">
			{navbarState ? (
			<VscChromeClose onClick={() => setNavbarState(false)} />
			) : (
			<GiHamburgerMenu
				onClick={(e) => {
				e.stopPropagation();
				setNavbarState(true);
				}}
			/>
			)}
		</div>
		<div className="links">
			<ul>
			<li
				className={currentLink === "1" ? "active" : "none"}
				onClick={() => setCurrentLink("1")}
			>
				<a>
					<MdSpaceDashboard />
					<span> QR Lien</span>
				</a>
			</li>
			<li
				className={currentLink === "2" ? "active" : "none"}
				onClick={() => setCurrentLink("2")}
			>
				<a>
					<RiDashboard2Fill />
					<span> QR Informations</span>
				</a>
			</li>
			<li
				className={currentLink === "3" ? "active" : "none"}
				onClick={() => setCurrentLink("3")}
			>
				<a>
					<FaAddressCard />
					<span> Contact</span>
				</a>
			</li>
			</ul>
		</div>
		</div>
	</Section>
	<ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
		<div className="responsive__links">
		<ul>
			<li
			className={currentLink === "1" ? "active" : "none"}
			onClick={() => setCurrentLink("1")}
			>
			<a>
				<MdSpaceDashboard />
				<span> QR Lien</span>
			</a>
			</li>
			<li
			className={currentLink === "2" ? "active" : "none"}
			onClick={() => setCurrentLink("2")}
			>
			<a>
				<RiDashboard2Fill />
				<span> QR Informations</span>
			</a>
			</li>
			<li
			className={currentLink === "3" ? "active" : "none"}
			onClick={() => setCurrentLink("3")}
			>
			<a>
				<FaAddressCard />
				<span> Contact</span>
			</a>
			</li>
		</ul>
		</div>
	</ResponsiveNav>
	</>
);
}

const Section = styled.section`
	position: fixed;
	left: 0;
	background-color: white;
	height: 100vh;
	width: 18vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 0;
	gap: 2rem;
	.top {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 100%;

		.toggle {
			display: none;
		}
		.brand {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 2rem;
			span {
				font-size: 2rem;
				color: #ffc107;
				font-family: "Permanent Marker", cursive;
			}
		}
		.links {
			display: flex;
			justify-content: center;
			ul {
				list-style-type: none;
				display: flex;
				flex-direction: column;
				gap: 1rem;
				li {
					padding: 0.6rem 1rem;
					border-radius: 0.6rem;
					&:hover {
						background-color: #ffc107;
						a {
							color: black;
						}
					}
					a {
						text-decoration: none;
						display: flex;
						gap: 1rem;
						color: black;
					}
				}
				.active {
					background-color: #ffc107;
					a {
						color: black;
					}
				}
			}
		}
	}

	.logout {
		padding: 0.3rem 1rem;
		border-radius: 0.6rem;
		background-color: #da0037;
		a {
			text-decoration: none;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			color: white;
		}
	}

	@media screen and (min-width: 280px) and (max-width: 1080px) {
		position: initial;
		width: 100%;
		height: max-content;
		padding: 1rem;
		.top {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding: 0 1rem;
			.toggle {
				display: block;
				color: black;
				z-index: 99;
				svg {
					font-size: 1.4rem;
				}
			}
			.brand {
				gap: 1rem;
				justify-content: flex-start;
			}
		}
		.top > .links,
		.logout {
			display: none;
		}
	}
`;

const ResponsiveNav = styled.div`
	position: fixed;
	right: -10vw;
	top: 0;
	z-index: 10;
	background-color: black;
	height: 100vh;
	width: ${({ state }) => (state ? "60%" : "0%")};
	transition: 0.4s ease-in-out;
	display: flex;
	opacity: 0;
	visibility: hidden;
	padding: 1rem;
	.responsive__links {
		ul {
			list-style-type: none;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			margin-top: 3rem;
			li {
				padding: 0.6rem 1rem;
				border-radius: 0.6rem;
				&:hover {
					background-color: #ffc107;
					a {
						color: black;
					}
				}
				a {
					text-decoration: none;
					display: flex;
					gap: 1rem;
					color: white;
				}
			}
			.active {
				background-color: #ffc107;
				a {
					color: black;
				}
			}
		}
	}
`;
