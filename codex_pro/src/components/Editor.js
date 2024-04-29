import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
function Editor() {
  const code = "console.log('Code Mirror!');";
  return (
    <CodeMirror
      value={code}
      height="100px"
      theme={vscodeDark}
    />
  );
};
export default Editor;