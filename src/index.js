import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DeviceStore from './store/deviceStore';
import UserStore from './store/userStore';

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
        logins: new UserStore(),
        apartment: new DeviceStore(),
        amount: new DeviceStore(),
        trade: new DeviceStore(),
        status: new DeviceStore(),
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);


