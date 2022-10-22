import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Highlighter = ({ code, language }) => {
  const hightlightStyles = {
    margin: 0,
    borderRadius: 0,
    boxShadow: "2px 2px 16px -8px black",
    borderRadius: "1em",
    overflowY: "auto",
    height: "100%",
  };

  return (
    <div className="highlighter__wrapper">
      <SyntaxHighlighter
        language={language}
        showLineNumbers
        style={a11yDark}
        customStyle={hightlightStyles}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Highlighter;
