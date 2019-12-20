export interface IBooleanObj {
    value:boolean, name:string, message: string
}

export interface IBooleanState {
    booleans: IBooleanObj[]
}

export const booleanInitialState: IBooleanState = {
   booleans: [
       {value:false, name:'SET_LOADING_PROGRESS', message:'loading...'},
       {value:false, name:'SET_ERROR', message:'error!'},
       {value:false, name:'SET_SUCCESS', message:'success!'}
   ]
};