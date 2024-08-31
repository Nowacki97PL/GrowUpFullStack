import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookTrainingSession, listTrainers } from '../actions/serviceActions';

const BookTrainingSessionForm = () => {
    const [trainer, setTrainer] = useState('');
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState(60);
    const [notes, setNotes] = useState('');

    const dispatch = useDispatch();

    const trainerList = useSelector((state) => state.trainerList);
    const { loading: loadingTrainers, error: errorTrainers, trainers } = trainerList;

    const sessionTrainingBook = useSelector((state) => state.sessionTrainingBook);
    const { loading, error, success } = sessionTrainingBook;

    useEffect(() => {
        dispatch(listTrainers());
    }, [dispatch]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(bookTrainingSession({ trainer, date, duration, notes }));
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Trener</label>
                {loadingTrainers ? (
                    <p>Loading trainers...</p>
                ) : errorTrainers ? (
                    <div>Error: {errorTrainers}</div>
                ) : (
                    <select value={trainer} onChange={(e) => setTrainer(e.target.value)} required>
                        <option value="">Wybierz trenera</option>
                        {trainers.map((trainer) => (
                            <option key={trainer.id} value={trainer.id}>
                                {trainer.name} {/* Upewnij się, że używasz odpowiednich właściwości */}
                            </option>
                        ))}
                    </select>
                )}
            </div>
            <div>
                <label>Data</label>
                <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
                <label>Duration (minutes)</label>
                <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
            </div>
            <div>
                <label>Notes</label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Booking...' : 'Book Session'}
            </button>
            {error && <div>Error: {error}</div>}
            {success && <div>Session booked successfully!</div>}
        </form>
    );
};

export default BookTrainingSessionForm;
