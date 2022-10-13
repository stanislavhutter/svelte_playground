import { writable } from 'svelte/store';

export const myTasks = writable([]);
export const myGroups = writable(['wip','stuff','done','in progress']);
export const myCredentials = writable([]);
export const mySettings = writable([]);
export const myProjects = writable([
    'be a slave',
    'make some candy',
    'do taxes',
    'play guitar'
]);

function generateTasks(){
    
}


console.log('jappa');
