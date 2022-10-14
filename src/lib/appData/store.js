import { writable } from 'svelte/store';
import { faker } from "@faker-js/faker";

let testData = {
    projects: ['project a','project b','project c'],
    taskLists: ['list a','list b','list c'],
}

function generateTasks(_amount){
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

let tasks = generateTasks(40);
console.log(tasks);

// export stuff
export const myTasks = writable(tasks);