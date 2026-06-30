import "../design/MenuChoiceHeader.css";

export function MenuChoiceHeader() {
	return (
		<div className="header-bar flex flex-row py-1 px-4 items-center justify-between space">
			<span>SYS:PORTFOLIO_v1.0.0</span>
			<span className="greeting">WELCOME, USER!</span>
			<div className="fake-stats flex flex-row justify-around">
				<span className=".memory mr-2">MEM:OK</span>
				<span className=".heat">HEAT:OK</span>
			</div>
		</div>
	);
}
