import { BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Cadastro from '../modules/Cadastro';
import Listagem from '../modules/Listagem';
import Home from '../modules/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/listagem" component={Listagem} />
    </BrowserRouter>
  );
};

export default Routes;
