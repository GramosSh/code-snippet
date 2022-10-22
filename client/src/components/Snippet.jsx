import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import copy from "copy-to-clipboard";

const Snippet = ({ match }) => {
  const [snippet, setSnippet] = useState();
  const [copyClipboardMessage, setCopyClipboardMessage] = useState({
    value: "Copy to clipboard",
    status: "passive",
  });

  const getSnippetById = async () => {
    const id = match.params.id;

    const res = await fetch(
      `https://snippet-api.codeks.tech/api/snippet/${id}`
    );
    const data = await res.json();

    if (data.success) {
      setSnippet(data.snippet[0]);
    }
  };

  useEffect(() => {
    getSnippetById();
  }, []);

  const hightlightStyles = {
    height: "90vh",
    overflowY: "auto",
  };

  const handleCopyToClipboard = () => {
    const isCopy = copy(snippet.code, {
      message: "Copy to clipboard",
    });

    if (isCopy) {
      setCopyClipboardMessage({
        value: "Successfully copied to clipboard",
        status: "active",
      });
    }
  };

  return snippet ? (
    <div>
      <button
        className={`copy__clipboard--btn ${
          copyClipboardMessage.status == "active" ? "active" : ""
        }`}
        onClick={handleCopyToClipboard}
      >
        {copyClipboardMessage.value}
      </button>
      <SyntaxHighlighter
        language={snippet.language}
        showLineNumbers
        style={a11yDark}
        customStyle={hightlightStyles}
      >
        {snippet.code}
      </SyntaxHighlighter>
    </div>
  ) : (
    "No Snippet found"
  );
};

export default Snippet;
