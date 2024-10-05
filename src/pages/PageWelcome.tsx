import { useContext } from "react"
import { AppContext } from "../AppContext"

export const PageWelcome = () => {
	const { message, cloudServices } = useContext(AppContext);

	return (
		<>
			<p>{message}</p>

			<h2 className="mt-3 text-2xl mb-2">Cloud Services</h2>
			<p className="mb-2">There are {cloudServices.length} cloud services.</p>
			<div>
				{cloudServices.map(cloudService => {
					return (
						<div className="bg-slate-500 p-3 mb-2 rounded" key={cloudService.id}>
							<img src={`images/cloudService_${cloudService.id}.png`} className="float-right w-[3rem] rounded-sm" />
							<div className="text-base font-semibold"><a href={cloudService.url} className="underline" target="_blank">{cloudService.name}</a></div>
							<div className="text-sm italic">{cloudService.description}</div>
						</div>
					)
				})}
			</div>
		</>
	)
}