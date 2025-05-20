import AppRouter from './routes/AppRouter';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';

function App() {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
