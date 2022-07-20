import React from "react";
import { createReactEditorJS } from "react-editor-js";
const { EDITOR_JS_TOOLS } = require("constants");

const Editor = () => {
    const EditorTool = createReactEditorJS();
    return (
        <EditorTool
            tools={EDITOR_JS_TOOLS}
            defaultValue={{
                time: 1635603431943,
                blocks: [
                    {
                        id: "sheNwCUP5A",
                        type: "header",
                        data: {
                            text: "Editor.js",
                            level: 2
                        }
                    },
                ]
            }}
        />
    )
}

export default Editor;
