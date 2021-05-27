import React from "react";
import "../styles/global.css";

/* Any global css styles remain in here.
This is the top-level component that is common across pages

State can be kept here also.

Global CSS can only be imported here
*/

const App = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default App;
