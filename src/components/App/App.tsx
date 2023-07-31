import ToastProvider from '../../providers/toast-provider';
import { Router } from '../../routesConfig/router';

function App() {
  return (
    <>
      <Router />
      <ToastProvider />
    </>
  );
}

export default App;
