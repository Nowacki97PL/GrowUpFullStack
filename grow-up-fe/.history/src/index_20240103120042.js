import { createRoot } from 'react-dom/client';
import moduleName from ''

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);