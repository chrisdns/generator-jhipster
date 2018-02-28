import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale from './locale';
import layout from './layout';
import authentication from './authentication';
import administration from './administration';
import userManagement from './user-management';
import account from './account';
import activate from './activate';
import sessions from './sessions';

/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

export default combineReducers({
  authentication,
  locale,
  layout,
  administration,
  userManagement,
  account,
  activate,
  sessions,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar
});
