
const todoName = 'TodoWeb'

export const getStorage = () => {
    const data = localStorage.getItem(todoName);
    if(data){
        return JSON.parse(data);
    }
    return [];
}

export const setStorage = (tasks) => {
    localStorage.setItem(todoName, JSON.stringify(tasks));
}