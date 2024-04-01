
const initialState ={}

const Library_Reducers_Object = (state = initialState, action) => {
    switch (action.type) {
        case "select_subject":
           
            const select_subject ={
                ...state ,
                select_subjectName : action.payload.select_subjectName ,
                select_subjectid : action.payload.select_subjectid ,
                select_subjectDetailid : action.payload.subjectDetailid ,
                select_detailId : action.payload.detailId ,
                select_detailItem : action.payload.detailItem ,
                select_detailPriority : action.payload.detailPriority ,
            }
             return select_subject;

        // case "DIALOG":
        //     return action.payload;
            
        // case "OJUAB":
        //     const dataB = [{ aaasss: { BB: "222" } }];
        //     return { ...state, dataB };
        // case "SELECTAGEN":
        //     const select_agen ={ ...state,
        //         select_agen:action.payload.id,
        //         select_agenName:action.payload.name,
        //         select_agenPhone:action.payload.Phone,
        //         select_agenEmail:action.payload.Email,
        //      }
        //     return select_agen;
        // case "USERNAME":
        //     return { ...state, inputc_username: action.payload };
      

        default:
            return state;
    }
};

export default Library_Reducers_Object;
