import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    required,
    NumberInput
} from 'react-admin';

export const PortfolioCreate = () => {
    return <Create>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} fullWidth />
            <NumberInput source="market" validate={[required()]} label="Market key" />
            <NumberInput source="qty" validate={[required()]} label="Quantity" />
        </SimpleForm>
    </Create>
};