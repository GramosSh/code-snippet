import { useState } from "react";
import { useHistory } from "react-router";
import Highlighter from "./Highlighter";
import Input from "./Input";

const Main = () => {
  const [code, setCode] = useState("Welcome to Codeks Snippet tool");
  const [languages] = useState([
    "plaintext",
    "html",
    "css",
    "javascript",
    "typescript",
    "java",
    "python",
    "php",
    "json",
  ]);
  const [languageInput, setLanguageInput] = useState(languages[0]);

  const history = useHistory();

  const handleSubmit = async () => {
    const snippet = {
      code: code,
      language: languageInput,
    };

    const res = await fetch("https://snippet-api.codeks.tech/api/snippet", {
      body: JSON.stringify(snippet),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const data = await res.json();
    console.log(data);
    if (data.success) {
      history.push(`/${data.snippet._id}`);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="snippet__cards">
          <Input
            value={code}
            setValue={setCode}
            languages={languages}
            setLanguageInput={setLanguageInput}
          />

          <Highlighter code={code} language={languageInput} />
        </div>

        <button className="generate__snipet--btn" onClick={handleSubmit}>
          Generate Code Snippet
        </button>
      </div>
    </div>
  );
};

export default Main;
