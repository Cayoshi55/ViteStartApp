// rootReducer.js
import { combineReducers } from 'redux';
import input_reducers from './input_reducers';
import Library_Reducers_Object from './Library_Reducers_Object.jsx';

import {fetch_agen, input_reducers_Object} from './input_reducers_Object';
import {input_reducers_clientObject} from './input_reducers_Object';
import {input_reducers_specificObject} from './input_reducers_Object';
import {fetch_menumain,
  fetch_subject,
  fetch_SubjectDetail,
  Userlogin,
  DashboardGetLableMyLibrary,
} from './input_reducers_Object';

const rootReducer = combineReducers({
  library_reducers_object : Library_Reducers_Object,
  input_t: input_reducers,
  adduser:input_reducers_Object,
  client: input_reducers_clientObject,
  specific:input_reducers_specificObject,
  fetchagen:fetch_agen,
  fetchLibrary_Menumain:fetch_menumain,
  fetchLibrary_Subject:fetch_subject,
  fetch_SubjectDetail,
  Userlogin,
  dashboard: DashboardGetLableMyLibrary

  
});

export default rootReducer;
