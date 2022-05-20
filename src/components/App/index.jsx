import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';
import { Container } from './styles';
import defaultColors from '../../assets/styles/defaultColors';

import Header from '../Header';
import TasksList from '../TasksList';

export default function App() {
  return (
    <ThemeProvider theme={defaultColors}>
      <Container>
        <GlobalStyles />
        <Header />
        <TasksList />
      </Container>
    </ThemeProvider>
  );
}
