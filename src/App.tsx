import './styles/theme.css';
import './styles/global.css';

import { Logo } from './components/Logo';
import { Container } from './components/Container';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu></Menu>
      </Container>

      <Container>
        <CountDown></CountDown>
      </Container>

      <Container>
        <form className='form'>
          <div className='formRow'>
            <label htmlFor='meuInput'>Task</label>
            <input id='meuInput' type='text' />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formRow'>
            <p>Ciclos</p>
            <p>o o o o o o</p>
          </div>
          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
