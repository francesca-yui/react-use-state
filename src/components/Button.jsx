import './Button.css'

export const Button = props => {
  const calssName = [
    'language-button',
    props.active ? 'active'
  ].filter(Boolean).join(' ');

  return (
    <button className='className'
      onClick={props.onClick}
      > 
      {props.children}
    </button>
  );
};