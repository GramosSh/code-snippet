import "./style.css";

const Input = ({ value, setValue, languages, setLanguageInput }) => {
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleLanguageSelectorChange = (e) => {
    setLanguageInput(e.target.value);
  };

  return (
    <div className="input__wrapper">
      <textarea
        className="input"
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={handleInputChange}
        value={value}
      >
        {value}
      </textarea>
      <div className="languageSelector__wrapper">
        <select onChange={handleLanguageSelectorChange}>
          {languages.map((language, idx) => (
            <option key={idx} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Input;
