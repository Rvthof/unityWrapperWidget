import { Component, createElement } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

import { UnityWrapper } from "./components/UnityWrapper";
import "./ui/UnityWrapperWidget.css";


export const UnityWrapperWidget = ({ loaderUrl, dataUrl, frameworkUrl, codeUrl, width, height, fullscreenBtn, actions }) => {
    if (loaderUrl.status != "loading") {
        return <UnityWrapper
            loaderUrl={loaderUrl.value}
            dataUrl={dataUrl.value}
            frameworkUrl={frameworkUrl.value}
            codeUrl={codeUrl.value}
            width={width}
            height={height}
            fullscreenBtn={fullscreenBtn}
            actions={actions}
        />;
    }
    return null;
}