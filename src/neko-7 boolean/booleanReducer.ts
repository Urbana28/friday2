import {booleanInitialState} from "./booleanInitialState";
import { ISetBoolean } from "./booleanActions";



export const booleanReducer = (state = booleanInitialState, action: ISetBoolean) => {
    switch (action.type) {
        case "SET_BOOLEAN":
            return {
                ...state,
               booleans: [...state.booleans, action.boolean]
            };
        default:
        {return state}
    }
};