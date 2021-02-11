import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/register/Register';
import Feed from '../pages/Feed/Feed';


// we get access to our 
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

export default connect( mapStateToProps )( withRouter( ({ history, currentUser }) => {

  const PrivateRoute = ({ Component, ...rest }) => {
    return <Route 
      {...rest} 
      render={ ( props ) => (
        currentUser ? ( 
            <Component {...props} />
        ) : ( 
            <Redirect to="/login" />
        )
      )} />;
  };

  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/register" component={Register} />

      <Route path="/login" component={Login} />

        <PrivateRoute path="/feed" Component={Feed} /> 
        
      {/*
        
          <Route path="*">
            <NotFound />
        </Route> */}
        
    </Switch>
  );
}));