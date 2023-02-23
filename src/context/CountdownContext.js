import { createContext, useState, useContext } from "react";

export const CountDownContext = createContext();
const CountdownContextProvider = ({ children }) => {
	const [launch, setLaunch] = useState(false);

	const value = {
		launch,
		setLaunch,
	};
	return <CountDownContext.Provider value={value}>{children}</CountDownContext.Provider>;
};

export default CountdownContextProvider;

export const useCountdown = () => {
	return useContext(CountDownContext);
};
