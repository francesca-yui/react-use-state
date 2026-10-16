import './Card.css';

export const Card = props => (
  <div className="language-card">
    <h2>{props.title}</h2>
    <p>{props.children}</p>
  </div>
);