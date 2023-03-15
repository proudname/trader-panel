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
    TextField, NumberField,
    ReferenceField,
    DateField
} from 'react-admin';

export const HistoryShow = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="price" label="Price" />
            <ReferenceField source="item" reference="selection-item">
               <TextField source="title" />
                &nbsp;#<TextField source="id" />
            </ReferenceField>
            <ReferenceField source="rule" reference="strategy-rule">
                <div>
                   - Change: <NumberField source="change"/>
                </div>
                <div>
                   - Action: <TextField source="action" label={'Action'} />
                </div>
            </ReferenceField>
            <DateField source="createdAt" />
        </SimpleShowLayout>
    </Show>
);