import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    DateInput,
    required,
    NumberInput,
    SimpleShowLayout,
    Show,
    TextField, NumberField
} from 'react-admin';

export const SelectionItemShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="title" fullWidth />
            <NumberField source="market" label="Market key" />
            <NumberField source="maxQty" label="Maximum quantity" />
        </SimpleShowLayout>
    </Show>
);