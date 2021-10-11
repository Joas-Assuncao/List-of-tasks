import React from 'react';

import PropTypes from 'prop-types';

import { MdOutlinePlaylistAdd } from 'react-icons/md';

import './style.css';

export default function Form({ handleSubmit, handleChange, newTask }) {
    return (
        <form
            onSubmit={handleSubmit}
            action="#"
            className="form"
        >
            <input
                onChange={handleChange}
                className="input"
                type="text"
                value={newTask}
            />
            <button className="button" type="submit">
                <MdOutlinePlaylistAdd className="image-button" />
            </button>
        </form>
    );
}

Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    newTask: PropTypes.string.isRequired,
};
