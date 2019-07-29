import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainFrame from "./components/MainFrame";

declare let module: any // for hotreloader

ReactDOM.render(
  <MainFrame/>,
  document.getElementById('root')
);


if (module.hot) {
   module.hot.accept(); // for hotreloader
}
