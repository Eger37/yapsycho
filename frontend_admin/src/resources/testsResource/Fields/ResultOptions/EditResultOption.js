import React from 'react';

import {
    useMutation, TextInput, FormWithRedirect, NumberInput,
} from 'react-admin';
import EditIcon from '@material-ui/icons/EditOutlined';
import IconButton from '@material-ui/core/IconButton';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useSimpleModalToggle } from '../../../../components/dialogs/useSimpleModal';

import { GridForm, GridInput } from '../../../../components/GridForm';


import { useNotifyError } from '../../../../utils/notifiers/useNotifyError';
import {QuestionCategoryAutocompleteInput} from "../QuestionCategoryAutocompleteInput";



export const EditResultOption = ({ resultOption, ...props}) => {
	const { open, handleOpen, handleClose } = useSimpleModalToggle();
	const notifyError = useNotifyError();

	const [approve, { loading }] = useMutation({
        type: 'update',
        resource: 'result-option',
        payload: { id: resultOption.id },
    }, {
		onSuccess: () => {
			handleClose();
		},
		onFailure: (error) => {
			notifyError(error);
		}
	});

	const handleSubmit = (values) => {
		approve({
			payload: {
				id: resultOption.id,
				data: values,
			}
		})
	}

	return (
		<div style={{ textAlign: "center" }}>
			<IconButton size="small" color="default" onClick={handleOpen}>
				<EditIcon fontSize="inherit" />
			</IconButton>
            {open && <Dialog open={open} onClose={handleClose} fullScreen={true}>
                <DialogTitle>Edit question {resultOption.id}</DialogTitle>
				<FormWithRedirect
					record={resultOption}
					component={DialogContent}
					save={handleSubmit}
					render={({ handleSubmitWithRedirect }) => (
						<React.Fragment>
							<GridForm>
								<GridInput xs={12} component={QuestionCategoryAutocompleteInput}
										   source="question_category_id" label="Category"
										   testId={props.test.id}/>

								<GridInput xs={12} component={NumberInput} source="min"
										   label="Minimum score"/>
								<GridInput xs={12} component={NumberInput} source="max"
										   label="Maximum score"/>
								<GridInput xs={12} component={TextInput} source="text"
										   label="Text"
										   multiline/>
							</GridForm>

							<DialogActions>
								<Button disabled={loading} onClick={handleClose} color="primary">
									Cancel
								</Button>
								<Button disabled={loading} onClick={handleSubmitWithRedirect} color="primary">
									Update
								</Button>
							</DialogActions>
						</React.Fragment>
					)}
				/>
			</Dialog>}
		</div>
	);
};
