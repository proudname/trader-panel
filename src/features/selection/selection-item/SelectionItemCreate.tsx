import * as React from 'react';
import { Create, SimpleForm, TextInput, DateInput, required, NumberInput } from 'react-admin';

export const SelectionItemCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} fullWidth />
            <NumberInput source="market" validate={[required()]} label="Market key" />
            <NumberInput source="maxQty" validate={[required()]} label="Maximum quantity" />
        </SimpleForm>
    </Create>
);