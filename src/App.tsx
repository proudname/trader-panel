import React from 'react';
import {Admin, Resource, ListGuesser, ShowGuesser, EditGuesser} from 'react-admin';
import {authProvider} from "./utils/authProvider";
import {dataProvider} from "./utils/dataProvider";
import { AccountTreeOutlined, VerifiedUserOutlined } from '@mui/icons-material';
import {SelectionItemCreate} from "./features/selection/selection-item/SelectionItemCreate";
import {SelectionItemList} from "./features/selection/selection-item/SelectionItemList";
import {SelectionItemShow} from "./features/selection/selection-item/SelectionItemShow";
import {SelectionItemEdit} from "./features/selection/selection-item/SelectionItemEdit";
import {SelectionList} from "./features/selection/selection/SelectionList";
import {SelectionCreate} from "./features/selection/selection/SelectionCreate";
import {SelectionEdit} from "./features/selection/selection/SelectionEdit";


const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} show={ShowGuesser} icon={VerifiedUserOutlined}/>
        <Resource name="strategy" list={ListGuesser} show={ShowGuesser} create={EditGuesser} icon={AccountTreeOutlined} />
        <Resource name="selection" list={SelectionList} create={SelectionCreate} edit={SelectionEdit} />
        <Resource
            name="selection-item"
            list={SelectionItemList}
            create={SelectionItemCreate}
            show={SelectionItemShow}
            edit={SelectionItemEdit}
            options={{ label: 'Selection items' }} />
        <Resource name="portfolio" list={ListGuesser} show={ShowGuesser} create={EditGuesser} />
        <Resource name="history" list={ListGuesser} show={ShowGuesser} create={EditGuesser} />
    </Admin>
);
export default App;