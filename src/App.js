import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Informations from "./components/Informations";
import Footer from './components/Footer';
import Contact from './components/Contact';

export default function App() {
	const [currentLink, setCurrentLink] = useState("1");

	return (
		<Div>
			<Menu currentLink={currentLink} setCurrentLink={setCurrentLink} />
			{currentLink === "1" && <Main />}
			{currentLink === "1" && <Footer />}
			{currentLink === "2" && <Informations />}
			{currentLink === "2" && <Footer />}
			{currentLink === "3" && <Contact />}
		</Div>
	);
}

const Div = styled.div`
position: relative;
`;