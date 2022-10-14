import { writable } from 'svelte/store';
import { faker } from "@faker-js/faker";

// seeder source data
let testData = {
    projects: ['project a','project b','project c'],
    taskLists: ['list a','list b','list c'],
}

// seeder/factory
function tasks_seeder(_amount){
    let tasks = [];

    for(let i = 0;i<_amount;i++){
        let task = {
            id: i,
            name: faker.name.firstName(),
            project_id: testData.projects[testData.projects.length * Math.random() | 0],
            folder_id: testData.taskLists[testData.taskLists.length * Math.random() | 0],
        }
        tasks.push(task)
    }

    return tasks;
}

// debug in console
let tasks = tasks_seeder(40);
console.log(tasks);

// export stuff
export const myTasks = writable(tasks);