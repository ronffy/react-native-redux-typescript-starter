/**
 * App.tsx
 * @author ronffy
 */
import React from 'react';
import { Provider } from 'react-redux';
import AppContainer, { NavigationActions } from './AppContainer';
import configureStore from './src/configureStore';

const store = configureStore();

export default class App extends React.Component {

  navigator: any;

  // 在App内跳转功能
  routePage = (tabName: string) => {
    this.navigator &&
      this.navigator.dispatch(
        NavigationActions.navigate({ routeName: tabName })
      );
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer
          ref={nav => this.navigator = nav}
        />
      </Provider>
      
    )
  }
}