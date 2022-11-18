import ConfirmationModelView from "./popupmodels";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRecoilState } from "recoil";
import { openConfirmationMessage, confirmationTitle, confirmationMessage, confirmationCancel, confirmationConfirm } from "../context/atoms";

const ModelsContext = (props:any) => {
    
    const {children} = props;

    const [openConfirmation, setOpenConfirmation] = useRecoilState(openConfirmationMessage);
    const [getConfirmationTitle, setConfirmationTitle] = useRecoilState(confirmationTitle);
    const [getConfirmationMessage, setConfirmationMessage] = useRecoilState(confirmationMessage);
    const [getConfirmationCancel, setConfirmationCancel] = useRecoilState(confirmationCancel);
    const [getConfirmationConfirm, setConfirmationConfirm] = useRecoilState(confirmationConfirm);

    const handleClose = () => {
        setConfirmationTitle('');
        setConfirmationMessage('');
        setConfirmationCancel(async () => {});
        setConfirmationConfirm(async () => {});
        getConfirmationCancel();
    }

    useEffect(() => {
        console.log("Model Heared")
    })

    return ( 
        <div className="w-100 h-100">
            <ConfirmationModelView open = {openConfirmation} title = {getConfirmationTitle} message = {getConfirmationMessage} onCancel = {getConfirmationCancel} onConfirm = {getConfirmationConfirm} />
            {children}
        </div>
     );
}
 
export default ModelsContext;