import React, { Component } from 'react';

import Form from '../Form';
import TaskList from '../TasksList';

import './style.css';

export default class Main extends Component {
    state = {
        newTask: '',
        tasks: [],
        index: -1,
    }

    componentDidMount() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));

        if (!tasks) return;

        this.setState({ tasks });
    }

    componentDidUpdate(prevProps, prevState) {
        const { tasks } = this.state;

        if (tasks === prevState.tasks) return;

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    handleChange = (event) => {
        this.setState({
            newTask: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { tasks, index } = this.state;
        let { newTask } = this.state;
        newTask = newTask.trim();

        if (tasks.indexOf(newTask) !== -1) return;

        const newTasks = [...tasks];

        if (index === -1) {
            this.setState({
                tasks: [...newTasks, newTask],
                newTask: '',
            });
        } else {
            newTasks[index] = newTask;

            this.setState({
                tasks: [...newTasks],
                index: -1,
                newTask: '',
            });
        }
    }

    handleDelete = (event, index) => {
        const { tasks } = this.state;
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        this.setState({
            tasks: [...newTasks],
        });
    }

    handleEdit = (event, index) => {
        const { tasks } = this.state;

        this.setState({
            index,
            newTask: tasks[index],
        });
    }

    render() {
        const { newTask, tasks } = this.state;

        return (
            <div className="main">
                <h1>Task List</h1>

                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    newTask={newTask}
                />

                <TaskList
                    tasks={tasks}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                />
            </div>
        );
    }
}
// Cria a pagina, o template, o form, tudo

// Importa e coloca os icones

// Coloca os eventos nos elementos

// Cria o state e setState

// Cria as funções demandadas

// Testa para ver se ta igual
