// input_reducers.jsx
const initialState = {
    // inputc_username: null,
    // inputc_password: null,
    // inputc_agentcode: null,
    // Add other input types here with initial values as needed
};

const input_reducers = (state = initialState, action) => {
    switch (action.type) {
        case "OBJECT_ADDUSER":
            return action.payload;
        case "DIALOG":
            return action.payload;
            
        case "OJUAB":
            const dataB = [{ aaasss: { BB: "222" } }];
            return { ...state, dataB };

       
        case "SELECTAGEN":
            const select_agen ={ ...state,
                select_agen:action.payload.id,
                select_agenName:action.payload.name,
                select_agenPhone:action.payload.Phone,
                select_agenEmail:action.payload.Email,
             }
            return select_agen;
        case "USERNAME":
            console.log(state);
            return { ...state, inputc_username: action.payload };
        case "PASSWORD":
            return { ...state, inputc_password: action.payload };
        case "AGENTCODE":
            return { ...state, inputc_agentcode: action.payload };
        case "HOTEL":
            return { ...state, inputc_Hotel: action.payload };
        case "HOTEL":
            return { ...state, inputc_Hotel: action.payload };
        case "TOUR":
            return { ...state, inputc_Tour: action.payload };
        case "TRANSFER":
            return { ...state, inputc_Transfer: action.payload };
        case "EMAIL":
            return { ...state, ClientConfiguration1_Email: action.payload };
        case "ENABLEMQCACHE":
            return { ...state, ClientConfiguration1_EnableMQCache: action.payload };
        case "ENABLESEARCHLOGGING":
            return { ...state, ClientConfiguration1_EnableSearchLogging: action.payload };
        case "FROMEMAIL":
            return { ...state, ClientConfiguration1_FromEmail: action.payload };
        case "HOTELSEARCHTIMEOUT":
            return { ...state, ClientConfiguration1_HotelSearchTimeout: action.payload };
        case "ISCOMPAREROOM":
            return { ...state, ClientConfiguration1_IsCompareRoom: action.payload };
        case "ISEMAILSSLENABLE":
            return { ...state, ClientConfiguration1_IsEmailSslEnable: action.payload };
        case "ISENABLEDMAPPING":
            return { ...state, ClientConfiguration1_IsEnabledMapping: action.payload };
        case "ISREDISENABLED":
            return { ...state, ClientConfiguration2_IsRedisEnabled: action.payload };
        case "ISSEARCHMESSAGEQUEUE":
            return { ...state, ClientConfiguration2_IsSearchMessageQueue: action.payload };
        case "MODIFYSEARCHTIMEOUT":
            return { ...state, ClientConfiguration2_ModifySearchTimeout: action.payload };
        case "MQ_HOSTNAME":
            return { ...state, ClientConfiguration2_Mq_HostName: action.payload };
        case "MQ_PASSWORD":
            return { ...state, ClientConfiguration2_Mq_Password: action.payload };
        case "MQ_TIMEOUT":
            return { ...state, ClientConfiguration2_Mq_Timeout: action.payload };
        case "MQ_USERNAME":
            return { ...state, ClientConfiguration2_Mq_Username: action.payload };
        case "REPLYTOEMAIL":
            return { ...state, ClientConfiguration2_ReplyToEmail: action.payload };
        case "SIMILARITYTHRESHOLD":
            return { ...state, ClientConfiguration3_SimilarityThreshold: action.payload };
        case "SMTPPASSWORD":
            return { ...state, ClientConfiguration3_SmtpPassword: action.payload };
        case "SMTPPORT":
            return { ...state, ClientConfiguration3_SmtpPort: action.payload };
        case "SMTPSERVER":
            return { ...state, ClientConfiguration3_SmtpServer: action.payload };
        case "SMTPUSERNAME":
            return { ...state, ClientConfiguration3_SmtpUsername: action.payload };
        case "SUPPLIERTIMEOUT":
            return { ...state, ClientConfiguration3_SupplierTimeout: action.payload };
        case "TOEMAIL":
            return { ...state, ClientConfiguration3_ToEmail: action.payload };
        case "AGENTCODE":
            return { ...state, SpecificConfiguration1_AgentCode: action.payload };
        case "AGENTEMAIL":
            return { ...state, SpecificConfiguration1_AgentEmail: action.payload };
        case "AGENTNAME":
            return { ...state, SpecificConfiguration1_AgentName: action.payload };
        case "AGENTTYPEID":
            return { ...state, SpecificConfiguration1_AgentTypeId: action.payload };
        case "APIAGENTCODE":
            return { ...state, SpecificConfiguration1_APIAgentCode: action.payload };
        case "APICOMPANYUID":
            return { ...state, SpecificConfiguration1_APICompanyUID: action.payload };
        case "APILOGINNAME":
            return { ...state, SpecificConfiguration2_APILoginName: action.payload };
        case "APIPASSWORD":
            return { ...state, SpecificConfiguration2_APIPassword: action.payload };
        case "APIUSERID":
            return { ...state, SpecificConfiguration2_APIUserId: action.payload };
        case "APIVERSION":
            return { ...state, SpecificConfiguration2_APIVersion: action.payload };
        case "COMPANYCODE":
            return { ...state, SpecificConfiguration2_CompanyCode: action.payload };

        default:
            return state;
    }
};

export default input_reducers;
