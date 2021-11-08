import { Category } from "../models/Category";
import { Task } from "../models/Tasks";

export class Seeder{
    static categories: Category[] = [
        { id: 1, title:  "Спорт" },
        { id: 2, title:  "Робота" },
        { id: 3, title:  "Навчання" },
    ];

    static tasks: Task[] = [
        {
            id:1,
            title: "Зробити домашку",
            status: false,
            category: Seeder.categories[2],
            date: new Date("2021-11-3")
        },
        {
            id:2,
            title: "Пограти футбол",
            status: true,
            category: Seeder.categories[0],
            date: new Date("2021-11-2")
        },
        {
            id:3,
            title: "Написати сідер до моделі",
            status: true,
            category: Seeder.categories[1],
            date: new Date("2021-11-4")
        },
    ]
}