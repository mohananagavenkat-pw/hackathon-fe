/** @format */

import React, { useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = ({ data, setData }) => {
	return (
		<>
			<CKEditor
				config={{
					toolbar: [
						"heading",
						"|",
						"bold",
						"italic",
						"link",
						"bulletedList",
						"numberedList",
						"|",
						"indent",
						"outdent",
						"|",
						"blockQuote",
						"undo",
						"redo",
					],
				}}
				editor={ClassicEditor}
				data={data || ""}
				onChange={(e, editor) => {
					const EdData = editor.getData() || "";
					setData(EdData);
				}}
			/>
		</>
	);
};

export default Editor;
