import {IBooleanObj} from "./booleanInitialState";

export const SET_BOOLEAN = 'SET_BOOLEAN';


export interface ISetBoolean {
    type: typeof SET_BOOLEAN,
    boolean: IBooleanObj
}




export let setBoolean = (boolean: IBooleanObj):ISetBoolean => {
    return {type: SET_BOOLEAN, boolean}
};
