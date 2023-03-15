import {
    TopToolbar,
    CreateButton,
    List,
    Datagrid,
    TextField,
    ListProps,
    NumberField
} from 'react-admin';


export const HistoryList = (props: ListProps) => (
    <List {...props}>
        <Datagrid rowClick={'show'}>
            <TextField source="id" />
            <NumberField source="price" />
        </Datagrid>
    </List>
);