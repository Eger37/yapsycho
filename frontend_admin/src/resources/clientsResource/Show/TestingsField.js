import React from 'react';
import {
    Datagrid, TextField, FunctionField,
    ReferenceManyField, DateField, ReferenceField
} from 'react-admin';
import Paper from '@material-ui/core/Paper';

import {ScrollingWrapperInCard} from '../../../components/ScrollingWrapper';

export const TestingsDatagrid = (props) => {
    return (
        <Paper variant="outlined">
            <ScrollingWrapperInCard>
                <Datagrid {...props}>
                    <TextField source="id" label="id"/>
                    <DateField source="created_at" showTime={true}/>
                    <ReferenceField label="test name" source="test_id" reference="test">
                        <TextField source="title" />
                    </ReferenceField>

                </Datagrid>
            </ScrollingWrapperInCard>
        </Paper>
    );
}


export const TestingsField = (props) => (
    <ReferenceManyField {...props} perPage={-1}>
        <TestingsDatagrid/>
    </ReferenceManyField>
);


TestingsField.defaultProps = {
    addLabel: true,
    className: "ra-field-datagrid",
}