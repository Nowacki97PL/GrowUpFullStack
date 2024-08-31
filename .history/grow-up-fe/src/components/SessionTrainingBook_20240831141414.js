import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookTrainingSession } from '../actions/serviceActions';

const BookTrainingSessionForm = () => {
    const [trainer, setTrainer] = useState('');
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState(60);

    const dispatch = useDispatch();
    const sessionTrainingBook = useSelector((state) => state.sessionTrainingBook);
    const { loading, error, success } = sessionTrainingBook;

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(bookTrainingSession({ trainer, date, duration, notes }));
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Trener</label>
                <input type="text" value={trainer} onChange={(e) => setTrainer(e.target.value)} required />
            </div>
            <div>
                <label>Data</label>
                <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
                <label>Duration (minutes)</label>
                <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
            </div>
            <button type="submit" disabled={loading}>
                Book Session
            </button>
            {error && <div>Error: {error}</div>}
            {success && <div>Session booked successfully!</div>}
        </form>
    );
};

export default BookTrainingSessionForm;
