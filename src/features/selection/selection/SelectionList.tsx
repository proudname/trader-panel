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
    SimpleList, ListProps, EditButton, ArrayField,
    FunctionField
} from 'react-admin';


const ListActions = () => (
    <TopToolbar>
        <CreateButton/>
    </TopToolbar>
);

export const SelectionList = (props: ListProps) => (
    <List actions={<ListActions/>} {...props}>
        <Datagrid rowClick={'edit'}>
            <TextField source="id" />
            <TextField source="name" />
            <FunctionField label="Total items" render={(record: any) => `${record.items.length}`} />
            <EditButton label="Edit" resource={'selection'} />
        </Datagrid>
    </List>
);