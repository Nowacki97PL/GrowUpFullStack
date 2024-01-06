import { createRoot } from 'react-dom/client';
import './bootstrap.min.css'
import './index.css'

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);