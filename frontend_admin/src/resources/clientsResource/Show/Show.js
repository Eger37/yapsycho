import React from 'react';
import {
    Show,
    SimpleShowLayout,
    RichTextField,
    useRedirect,
    TopToolbar,
    EditButton,
    ShowButton,
} from 'react-admin';

import {TestingsField} from './TestingsField';


import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';

export const ActionsWithBackButton = ({
                                          basePath,
                                          data,
                                          hasList,
                                          hasEdit,
                                          hasShow,
                                      }) => {
    const redirect = useRedirect();

    return (
        <TopToolbar>
            {hasList && <Box display="flex">
                <Button startIcon={<ArrowBack/>}
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => redirect(basePath)}>
                    {"back"}
                </Button>
            </Box>}
            {hasEdit && <Box ml={1} display="flex">
                <EditButton variant="outlined" basePath={basePath} record={data}/>
            </Box>}
            {hasShow && <Box ml={1} display="flex">
                <ShowButton variant="outlined" basePath={basePath} record={data}/>
            </Box>}
            <Box display="flex" flex="1"/>
        </TopToolbar>
    );
}


export const ClientsShow = ({permissions, hasShow, ...props}) => {
    return (
        <Show actions={<ActionsWithBackButton hasEdit={true}/>} {...props}>
            <SimpleShowLayout style={{paddingBottom: 8}}>
                <RichTextField source="anamnesisFromPsychologist" label={"Анамнез"}/>
                <TestingsField label="Tests" reference="testing" target="user_id"/>
            </SimpleShowLayout>
        </Show>
    );
};
