import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRecoilState } from "recoil";
import { openConfirmationMessage, confirmationTitle, confirmationMessage, confirmationCancel, confirmationConfirm } from "../context/atoms";

const ConfirmationModelView = ({ open=false, title = "", message = "", onCancel = async () => { }, onConfirm = async () => { } }: any) => {

    const [isLoading, setIsLoading] = useState(true);
    
    const handleConfirm = async (event:any) => {
        setIsLoading(true)
        await onConfirm()
        setIsLoading(false)
    }

    const handleCancel = async (event:any) => {
        await onCancel()
    }

    return (
        <div>
            <Dialog fullWidth={true} open={open} onClose={async (e) => { await onCancel() }}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <p>{message}</p>
                </DialogContent>
                <DialogActions>
                    {
                        isLoading ? (
                            <div className="px-4">
                                <CircularProgress style={{ color: 'black' }} size={22} />
                            </div>
                        ) : (
                            <Button onClick={handleConfirm}>Yes</Button>
                        )
                    }
                    <Button onClick={handleConfirm}>No</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ConfirmationModelView;