import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    required,
    NumberInput, ReferenceArrayInput, AutocompleteArrayInput, ArrayInput, SimpleFormIterator, SelectInput
} from 'react-admin';
import {StrategyStatus, TradeAction, TradingRuleStatus} from "./StrategyEdit";

export const StrategyCreate = () => {
    return <Create transform={(data) => ({
        ...data,
        items: data.items.map((item: any) => ({id: item}))
    })}>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} fullWidth />
            <ReferenceArrayInput
                source="items"
                reference="selection"
            >
                <AutocompleteArrayInput
                    optionText={value => value.name + ' #' + value.id}
                />
            </ReferenceArrayInput>
            <ArrayInput source="rules">
                <SimpleFormIterator inline>
                    <NumberInput source="change" helperText={false} />
                    <SelectInput source="status" choices={[
                        { id: TradingRuleStatus.ACTIVE, name: 'Active' },
                        { id: TradingRuleStatus.EXECUTED, name: 'Executed' },
                    ]} />
                    <SelectInput source="action" choices={[
                        { id: TradeAction.BUY, name: 'BUY' },
                        { id: TradeAction.SELL, name: 'SELL' },
                    ]} />
                </SimpleFormIterator>
            </ArrayInput>
            <SelectInput source="status" choices={[
                { id: StrategyStatus.ENABLED, name: 'ENABLED' },
                { id: StrategyStatus.DISABLED, name: 'DISABLED' },
            ]} />
        </SimpleForm>
    </Create>
};