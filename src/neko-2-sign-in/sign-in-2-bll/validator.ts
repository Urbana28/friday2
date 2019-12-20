export let required = (value: any) => {
    if(value) return undefined;
    return 'Field is required'
};