import { Component, createElement } from "react";
import { UnityWrapper } from "./components/UnityWrapper";

export class preview extends Component {
    render() {
        return <UnityWrapper />;
    }
}

export function getPreviewCss() {
    return require("./ui/UnityWrapperWidget.css");
}
