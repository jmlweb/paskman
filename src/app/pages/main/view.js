import React from 'react';
import Helmet from 'react-helmet';
import style from './style.scss';

const {
  arrayOf,
  any,
} = React.PropTypes;

function MainView(props) {
  return (
    <div className={style.main}>
      <Helmet
        htmlAttributes={{ lang: 'en', amp: undefined }}
        title="Paskman: Pomodoro based task manager"
        titleTemplate="%s - Paskman"
        style={[
          { type: 'text/css', cssText: 'html, body {margin: 0; padding: 0;}' },
        ]}
        meta={[
          { name: 'description', content: 'Paskman: Pomodoro based task manager' },
          {
            name: 'viewport',
            content: 'user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1',
          },
        ]}
      />
      {props.children}
    </div>
  );
}

MainView.propTypes = {
  children: arrayOf(any),
};

MainView.defaultProps = {
  children: [],
};

export default MainView;
