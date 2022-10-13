import ReactDOM from 'react-dom';

import { HelloWorldPage } from './pages/HelloWorldPage';
import QueryProvider from './providers/QueryProvider';
const App = (): JSX.Element => {
    return <HelloWorldPage />;
};

ReactDOM.render(
    <QueryProvider>
        <App />
    </QueryProvider>,
    document.getElementById('app')
);
