import * as React from 'react';
import { SimpleForm, TextInput, required, NumberInput, Edit } from 'react-admin';

export const SelectionItemEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} fullWidth />
            <NumberInput source="market" validate={[required()]} label="Market key" />
            <NumberInput source="maxQty" validate={[required()]} label="Maximum quantity" />
        </SimpleForm>
    </Edit>
);