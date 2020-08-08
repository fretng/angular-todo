export class TodoListItemModel {
    public id: number;
    public message: string;
    public isDone: boolean;
    public createDate: Date;

    constructor(data: any) {
        this.id = data.id;
        this.message = data.message;
        this.isDone = data.isDone;
        this.createDate = data.createDate;
    }
}

export class TodoListModel {
    public todoListItem: TodoListItemModel[];

    public setListFormApi(apiList: any) {
        this.todoListItem = [];

        for (let i of apiList) {
            let item = new TodoListItemModel(i);
            this.todoListItem.push(item);
        }
    }
}
