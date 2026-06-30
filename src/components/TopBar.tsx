import "../design/TopBar.css";

export function TopBar() {
	return (
		<div className="top-bar flex flex-col justify-start pt-4 pb-4 pr-5 pl-5">
			<div className="initializing">❯ INITIALIZING...</div>
			<h1 className="title-drop">JIMMY_RASHED.DEV</h1>
			<div className="instruction">SELECT RENDERING MODE TO CONTINUE</div>
		</div>
	);
}
