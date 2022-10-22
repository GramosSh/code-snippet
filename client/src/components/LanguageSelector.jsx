const LanguageSelector = ({ languages, setLanguageInput }) => {
  const handleLanguageSelectorChange = (e) => {
    setLanguageInput(e.target.value);
  };

  return (
    <div className="languageSelector__wrapper">
      <select onChange={handleLanguageSelectorChange}>
        {languages.map((language, idx) => (
          <option key={idx} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
