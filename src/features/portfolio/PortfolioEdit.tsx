import * as React from 'react';
import {
    SimpleForm,
    TextInput,
    required,
    Edit,
    NumberInput
} from 'react-admin';

export const PortfolioEdit = () => {
    return <Edit>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} fullWidth />
            <NumberInput source="market" validate={[required()]} label="Market key" />
            <NumberInput source="qty" validate={[required()]} label="Quantity" />
        </SimpleForm>
    </Edit>
};