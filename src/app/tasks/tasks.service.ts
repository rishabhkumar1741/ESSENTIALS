import type {NewTaskModels} from "./new-task/new-task.models";
import {Injectable} from "@angular/core";

@Injectable({providedIn:"root"})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Set up project repository',
      summary: 'Create a new repository for the project and set up initial files',
      dueDate: '2024-05-15',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Design website layout',
      summary: 'Create wireframes and design the layout of the online shop',
      dueDate: '2024-06-10',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Implement user authentication',
      summary: 'Add user authentication features to the website',
      dueDate: '2024-06-15',
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Set up database',
      summary: 'Install and configure the database for the online shop',
      dueDate: '2024-06-20',
    },
    {
      id: 't6',
      userId: 'u3',
      title: 'Create product listing page',
      summary: 'Develop the page to list all products available in the shop',
      dueDate: '2024-06-25',
    },
    {
      id: 't7',
      userId: 'u2',
      title: 'Develop shopping cart feature',
      summary: 'Implement the shopping cart functionality',
      dueDate: '2024-06-30',
    },
    {
      id: 't8',
      userId: 'u1',
      title: 'Set up payment gateway',
      summary: 'Integrate payment gateway for handling transactions',
      dueDate: '2024-07-05',
    },
    {
      id: 't9',
      userId: 'u4',
      title: 'Implement order history page',
      summary: 'Develop the page to display past orders to users',
      dueDate: '2024-07-10',
    },
    {
      id: 't10',
      userId: 'u5',
      title: 'Conduct usability testing',
      summary: 'Perform usability testing and gather feedback',
      dueDate: '2024-07-15',
    },
  ];

  getUserTask(userId:string)
  {
    return this.tasks.filter((task)=>task.userId===userId)
  }
  addTask(taskData:NewTaskModels,userId:string)
  {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.duedate,
      userId: userId
    })
  }
  removeTask(taskId:string)
  {
    this.tasks =  this.tasks.filter((task)=>task.id!=taskId)  }
}
