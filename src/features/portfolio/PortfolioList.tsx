import {
    TopToolbar,
    CreateButton,
    List,
    Datagrid,
    TextField,
    ListProps,
} from 'react-admin';


const ListActions = () => (
    <TopToolbar>
        <CreateButton/>
    </TopToolbar>
);

export const PortfolioList = (props: ListProps) => (
    <List actions={<ListActions/>} {...props}>
        <Datagrid rowClick={'edit'}>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="market" />
            <TextField source="qty" />
        </Datagrid>
    </List>
);