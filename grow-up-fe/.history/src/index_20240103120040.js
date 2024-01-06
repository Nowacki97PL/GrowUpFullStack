import { createRoot } from 'react-dom/client';
import moduleName from 'module'

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);