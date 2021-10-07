import { Component, createElement } from "react";
import Unity, { UnityContext } from "react-unity-webgl";



export const UnityWrapper = ({ loaderUrl, dataUrl, frameworkUrl, codeUrl, width, height, fullscreenBtn, actions }) => {

	const ctx = new UnityContext({
		loaderUrl: loaderUrl,
		dataUrl: dataUrl,
		frameworkUrl: frameworkUrl,
		codeUrl: codeUrl,
	});

	const unityNode = (<Unity
		unityContext={ctx}
		style={{
			height: width || 300,
			width: height || 150,
		}}
	/>);
	
	for (let i = 0; i < actions.length; i++) {
		const el = actions[i];
		ctx.on(el.actionName, () => {
			el.action.execute();
		})
	}

	const onFullscreen = () => {
		ctx.setFullscreen(true);
	}

	if (fullscreenBtn) {
		return <div>{unityNode}
			<div onClick={onFullscreen} className={"btn"}>
				<span class="glyphicon glyphicon-fullscreen"></span>
			</div>
		</div>;
	} else {
		return <div>{unityNode}</div>;
	}
}