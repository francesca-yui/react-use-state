import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { languages } from "./data/languages";

export const App = () => {
  const [activeLanguage, setActveLanguage] = useState(null);

   return (
    <>
    <header><h1>Lear Web development</h1></header>

    <main>
      {languages.map(language => (
        <Button 
        active={activeLanguage === language.id}
          key={language.id}
          onClick={() => setActveLanguage(language.id)}
        >
          {language.title}
        </Button>
      ))}
    </main>
    </>
  );
};