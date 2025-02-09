import { createContext, useEffect, useState } from "react";
import { CloudService } from "./types";

interface IAppContext {
	message: string
	cloudServices: CloudService[];
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [message] = useState("Welcome to the Info Site.");
	const [cloudServices, setCloudServices] = useState<CloudService[]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch('http://localhost:4501/cloudServices.json');
			const _cloudServices = await response.json();
			setCloudServices(_cloudServices);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				message,
				cloudServices
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
