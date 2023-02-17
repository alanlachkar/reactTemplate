// React imports
import ReactDOM from 'react-dom';
// Component imports
import { PostPage } from './pages/PostPage';
// Provider imports
import QueryProvider from './providers/QueryProvider';

const App = (): JSX.Element => {
  return <PostPage />;
};

ReactDOM.render(
  <QueryProvider>
    <App />
  </QueryProvider>,
  document.getElementById('app')
);
