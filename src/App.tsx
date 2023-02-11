import React from 'react';
import {Admin, Resource, ListGuesser, ShowGuesser, EditGuesser} from 'react-admin';
import {authProvider} from "./utils/authProvider";
import {dataProvider} from "./utils/dataProvider";
import { AccountTreeOutlined } from '@mui/icons-material';


const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} show={ShowGuesser} />
        <Resource name="strategy" list={ListGuesser} show={ShowGuesser} create={EditGuesser} icon={AccountTreeOutlined} />
        <Resource name="selection" list={ListGuesser} show={ShowGuesser} create={EditGuesser} />
        <Resource name="portfolio" list={ListGuesser} show={ShowGuesser} create={EditGuesser} />
        <Resource name="history" list={ListGuesser} show={ShowGuesser} create={EditGuesser} />
    </Admin>
);
export default App;