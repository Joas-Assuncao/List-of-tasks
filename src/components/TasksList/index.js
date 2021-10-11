import React from 'react';

import PropTypes from 'prop-types';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './style.css';

export default function TaskList({ tasks, handleEdit, handleDelete }) {
    return (
        <ul className="tasks">
            {tasks.map((task, index) => (
                <li key={task}>
                    {task}
                    <span>
                        <FaEdit onClick={(event) => handleEdit(event, index)} className="edit" />
                        <FaWindowClose onClick={(event) => handleDelete(event, index)} className="delete" />
                    </span>
                </li>
            ))}
        </ul>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
};
