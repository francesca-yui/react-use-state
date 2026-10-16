import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { languages } from "./data/languages";
import { Card } from "./components/Card";

export const App = () => {
  const [activeLanguageId, setActiveLanguageId] = useState(null);

  const activeLanguage = languages.find(language => language.id === activeLanguageId);

   return (
    <>
    <header><h1>Learn Web development</h1></header>

    <main>
      <section className="buttons">
      {languages.map(language => (
        <Button 
        active={activeLanguageId === language.id}
          key={language.id}
          onClick={() => setActiveLanguageId(language.id)}
        >
          {language.title}
        </Button>
      ))}
    </section>
    {activeLanguage && <Card title={activeLanguage.title}>{activeLanguage.description}</Card>}
    </main>

    </>
  );
};