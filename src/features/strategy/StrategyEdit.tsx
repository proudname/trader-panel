import * as React from 'react';
import {
    SimpleForm,
    TextInput,
    required,
    Edit,
    NumberInput,
    ArrayInput,
    SimpleFormIterator,
    SelectInput, AutocompleteArrayInput, ReferenceArrayInput,
} from 'react-admin';

export enum TradingRuleStatus {
    ACTIVE,
    EXECUTED
}

export enum TradeAction {
    BUY,
    SELL
}

export enum StrategyStatus {
    ENABLED,
    DISABLED
}

export const StrategyEdit = () => {
    return <Edit transform={(data) => ({
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
    </Edit>
};