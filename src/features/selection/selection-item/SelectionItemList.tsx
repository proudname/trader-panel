import {
    TopToolbar,
    FilterButton,
    CreateButton,
    ExportButton,
    Button,
    List,
    Title,
    Datagrid,
    TextField,
    SimpleList, ListProps, EditButton
} from 'react-admin';


const ListActions = () => (
    <TopToolbar>
        <CreateButton/>
    </TopToolbar>
);

export const SelectionItemList = (props: ListProps) => (
    <List actions={<ListActions/>} {...props}>
        <Datagrid rowClick={'show'}>
            <TextField source="id" />
            <TextField source="title" />
            <EditButton label="Edit" resource={'selection-item'} />
        </Datagrid>
    </List>
);