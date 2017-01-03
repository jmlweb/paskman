import { StyleSheet, css } from 'aphrodite';
import createLogo from '../logo';

const styles = StyleSheet.create({
  red: {
    backgroundColor: 'red',
  },
});

export default React => () => {
  const Logo = createLogo(React);
  return (
    <header className={css(styles.red)}>
      <Logo />
    </header>
  );
};
