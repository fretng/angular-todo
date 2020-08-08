import { Component, OnInit } from '@angular/core';
import { CacheService } from 'src/app/service/cache.service';
import { ListService } from './service/list.service';
import { Router } from '@angular/router'
import { TodoListModel, TodoListItemModel } from './model/todo-list.model';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    public username: string;
    public inputText: string;
    public todoList: TodoListItemModel[];

    constructor(
        private cacheService: CacheService,
        private router: Router,
        private listService: ListService
    ) {}

    ngOnInit(): void {
        if (this.cacheService.isLogin()) {
            this.username = this.cacheService.getUsername();
        } else {
            this.username = '';
        }

        this.getTodoList();
    }

    logout() {
        this.cacheService.removeToken();
        this.router.navigateByUrl('/');
    }

    onkeyInput(event) {
        if (event.key == 'Enter') {
            this.addTodo();
        }
    }

    addTodo() {
        if (this.inputText == '') {
            return;
        }

        let token = this.cacheService.getToken();
        this.listService.addTodo(this.inputText, token).subscribe(
            (res) => {
                console.log(res);
                this.inputText = '';
                this.getTodoList();
            },
            (err) => {
                console.log(err);
            },
        );
        // console.log(this.inputText);
    }

    getTodoList() {
        let token = this.cacheService.getToken();
        this.listService.getTodoList(token).subscribe(
            (res) => {
                let listTodo = new TodoListModel();
                listTodo.setListFormApi(res);
                this.todoList = listTodo.todoListItem;

                console.log(this.todoList);
            },
            (err) => {
                console.log(err);
            },
        );
    }

    checkTodoItem(item: TodoListItemModel, isDone: boolean) {
        let token = this.cacheService.getToken();
        this.listService.checkTodo(item.id, isDone, token).subscribe(
            (res) => {
                console.log(res);
                this.getTodoList();
            },
            (err) => {
                console.log(err);
            }
        );
    }

    deleteItem(item: TodoListItemModel) {
        let token = this.cacheService.getToken();
        this.listService.deleteTodo(item.id, token).subscribe(
            (res) => {
                console.log(res);
                this.getTodoList();
            },
            (err) => {
                console.log(err);
            },
        );
    }
}
