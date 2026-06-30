import { MenuChoiceHeader } from "./MenuChoiceHeader";
import { TopBar } from "./TopBar";

export function MenuChoice() {
	return (
		<div className="flex flex-col justify-center">
			<MenuChoiceHeader />
			<TopBar />
		</div>
	);
}
