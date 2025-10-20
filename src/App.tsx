import './styles/theme.css';
import './styles/global.css';

import { Logo } from './components/Logo';
import { Container } from './components/Container';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

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
          <div className='form-row'>
            <DefaultInput
              labelText='task'
              id='meuInput'
              type='text'
              placeholder='Digite algo'
            />
          </div>
        </form>
      </Container>
    </>
  );
}
