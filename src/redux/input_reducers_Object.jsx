// input_reducers_Object.jsx
const initialState = {};

export const input_reducers_Object = (state2 = initialState, action) => {

  switch (action.type) {
    case "ADDINPUTC":
      const { name, data } = action.payload;
      return {
        ...state2,
        [name]: data,
      };
      case "ADD_ATINPUTC":
        const { ATname, ATdata } = action.payload;
        return {
          ...state2,
          [ATname]: ATdata,
        };
      
    case "ADDUSERTOBJECTINPUTC":
      // OBJECT
      const oj = action.payload.length != 0 ? {
        inputc_username:action.payload[0].username,
        inputc_password:action.payload[0].password,
        inputc_agentcode :action.payload[0].clientCode,
        inputc_suppliercode :action.payload[0].supplierCode,
        inputc_suppliercode_ :action.payload[0].supplierCode,
        inputc_XMLSUPPLIERCODE :action.payload[0].xmL_SUPPLIER_CODE,
        inputc_XMLSUPPLIERCODE_:action.payload[0].xmL_SUPPLIER_CODE,
        inputc_Hotel:action.payload[0].hotel,
        inputc_Tour:action.payload[0].tour,
      inputc_Transfer:action.payload[0].transfer,
      }: {}
      return oj ;
    default:
      return state2;
  }
};

export const input_reducers_clientObject = (state2 = initialState, action) => {
  switch (action.type) {
    case "ADDCLIENT":
      const { name, data } = action.payload;
      return {
        ...state2,
        [name]: data,
      };
    case "ADDUSERTOBJECTCLIENT":
      // OBJECT
      const oj = action.payload.length != 0 ? {
        Client_Email : action.payload[0].constantValue,
       Client_EnableMQCache: action.payload[1].constantValue,
       Client_EnableSearchLogging: action.payload[2].constantValue,
       Client_FromEmail: action.payload[3].constantValue,
       Client_HotelSearchTimeout: action.payload[4].constantValue,
       Client_IsCompareRoom: action.payload[5].constantValue,
       Client_IsEmailSslEnable: action.payload[6].constantValue,
       Client_IsEnabledMapping: action.payload[7].constantValue,
       Client_IsRedisEnabled: action.payload[8].constantValue,
       Client_IsSearchMessageQueue: action.payload[9].constantValue,
       Client_ModifySearchTimeout: action.payload[10].constantValue,
       Client_Mq_HostName: action.payload[11].constantValue,
       Client_Mq_Password: action.payload[12].constantValue,
       Client_Mq_Timeout: action.payload[13].constantValue,
       Client_Mq_Username: action.payload[14].constantValue,
       Client_ReplyToEmail: action.payload[15].constantValue,
       Client_SimilarityThreshold: action.payload[16].constantValue,
       Client_SmtpPassword: action.payload[17].constantValue,
       Client_SmtpPort: action.payload[18].constantValue,
       Client_SmtpServer: action.payload[19].constantValue,
       Client_SmtpUsername: action.payload[20].constantValue,
       Client_SupplierTimeout: action.payload[21].constantValue,
       Client_ToEmail: action.payload[22].constantValue,
      }: {}
      return oj ;
      return action.payload;

    default:
      return state2;
  }
};

export const input_reducers_specificObject = (
  state2 = initialState,
  action
) => {
  switch (action.type) {
    case "ADDSPECIFIC":
      const { name, data } = action.payload;
      return {
        ...state2,
        [name]: data,
      };
    case "ADDUSERTOBJECTSPECIFIC":
      // OBJECT
      const oj = action.payload.length != 0 ? {
        Specific_AgentCode : action.payload[0].constantValue,
        Specific_AgentEmail : action.payload[1].constantValue,
        Specific_AgentName : action.payload[2].constantValue,
        Specific_AgentTypeId : action.payload[3].constantValue,
        Specific_APIAgentCode : action.payload[4].constantValue,
        Specific_APICompanyUID : action.payload[5].constantValue,
        Specific_APILoginName : action.payload[6].constantValue,
        Specific_APIPassword : action.payload[7].constantValue,
        Specific_APIUserId : action.payload[8].constantValue,
        Specific_APIVersion : action.payload[9].constantValue,
        Specific_CompanyCode : action.payload[10].constantValue,
        Specific_IsRoomAvailabilityOnly : action.payload[11].constantValue,
        Specific_IsThrottlingEnabled : action.payload[12].constantValue,
        Specific_OldRequestUrl : action.payload[13].constantValue,
        Specific_OnRequest : action.payload[14].constantValue,
        Specific_RequestUrl : action.payload[15].constantValue,
        Specific_SearchCondition : action.payload[16].constantValue,
        Specific_ThrottleLimit : action.payload[17].constantValue,
      }: {}
      return oj;

    default:
      return state2;
  }
};

export const fetch_agen = (
  state2 = initialState,
  action
) => {
  switch (action.type) {
    case "FETCH_AGEN":
      // OBJECT
      return action.payload;
      case "FETCH_AGEN_ERROR":
        // OBJECT
        return action.payload;
    default:
      return state2;
  }
};

// Library API
export const fetch_menumain = (
  state2 = initialState,
  action
) => {
  switch (action.type) {
    case "FETCH_MENUMAIN":
      return action.payload;
      case "FETCH_MENUMAIN_ERROR":
        // OBJECT
        return action.payload;
    default:
      return state2;
  }
};

export const fetch_subject = (
  state2 = initialState,
  action
) => {
  switch (action.type) {
    case "FETCH_SUBJECT":
      
      return action.payload;
      case "FETCH_SUBJECT_ERROR":
        // OBJECT
        return action.payload;
    default:
      return state2;
  }
};



export const Userlogin = (
  state2 = initialState,
  action
) => {
  switch (action.type) {
    case "USERLOGIN":
      return action.payload;
      case "USERLOGIN_ERROR":
        // OBJECT
        return action.payload;
    default:
      return state2;
  }
};

// Library API
export const fetch_SubjectDetail = (
  state2 = initialState,
  action
) => {
  switch (action.type) {
    case "FETCH_SUBJECTDETAIL":
      return action.payload;
      case "FETCH_SUBJECTDETAIL_ERROR":
        // OBJECT
        return action.payload;
    default:
      return state2;
  }
};

// Dashboard MyLibrary
export const DashboardGetLableMyLibrary = (
  state2 = initialState,
  action
) => {
  switch (action.type) {
    case "GETLABLE_MYLIUBRARY":
      return action.payload;
      case "GETLABLE_MYLIUBRARY_ERROR":
        // OBJECT
        return action.payload;
    default:
      return state2;
  }
};


const desine ={
    input_t:{
        adduser:{
            username :"",
            password  :"",
            agentcode  :"",
            Hotel  :true,
            Tour   :false,
        },
        client:{
            Email :"",
            IsRedisEnabled  :"",
            IsSearchMessageQueue  :"",
            EnableMQCache  :"",
            EnableSearchLogging  :"",
        },
        specific:{
            AgentCode :"",
            AgentEmail  :"",
            AgentName  :"",
            AgentTypeId  :"",
            APIAgentCode  :""
        }
    }
}
