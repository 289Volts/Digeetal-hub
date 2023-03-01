import { createContext, useState, useContext } from "react";

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
	const [font, setFont] = useState("null");
	console.log(font);

	const value = {
		font,
		setFont,
	};
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

export const useApp = () => {
	return useContext(AppContext);
};
