import React from "react";
import {List, Datagrid, TextField, EditButton, ShowButton, DeleteButton, BooleanField, DateField} from 'react-admin';

import {ScrollingWrapper} from '../../../components/ScrollingWrapper';


const defaultSort = {field: 'id', order: 'DESC'};

export const TestsList = props => {
    return (
        <List
            {...props}
            sort={defaultSort}
            exporter={false}
            bulkActionButtons={false}
            perPage={22}
        >
            <ScrollingWrapper>
                <Datagrid>
                    <TextField source="id"/>
                    <TextField source="title"/>
                    <TextField source="subtitle"/>
                    {/*<TextField source="description"/>*/}
                    <BooleanField source="activ"/>
                    <DateField source="created_at" showTime={true}/>
                    <EditButton label=""/>
                    <ShowButton label=""/>
                    <DeleteButton label=""/>
                </Datagrid>
            </ScrollingWrapper>
        </List>
    );
}
