import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

// PascalCase
// App
// HeaderHeading -> h1 do cabeçalho
// ExemploDeComponente

export function App() {
  console.log('oi');
  return (
    <>
      <Heading />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        officiis beatae dolores autem sequi odit nulla. Corporis quas, neque,
        reiciendis, facilis id in tempore porro ut fuga nihil cum molestiae.
      </p>
    </>
  );
}
