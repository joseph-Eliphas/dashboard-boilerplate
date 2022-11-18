import { useRecoilState, useSetRecoilState,  } from "recoil";
import { confirmationCancel, confirmationConfirm, confirmationMessage, confirmationTitle, openConfirmationMessage } from "../context/atoms";
import ConfirmationModelView from "./popupmodels";

export function openConfirmationModel({ title = "", message = "", onCancel = async () => { }, onConfirm = async () => { } }: any) {

    // const setOpenConfirmation = useSetRecoilState(openConfirmationMessage);
    // const setConfirmationTitle = useSetRecoilState(confirmationTitle);
    // const setConfirmationMessage = useSetRecoilState(confirmationMessage);
    // const setConfirmationCancel = useSetRecoilState(confirmationCancel);
    // const setConfirmationConfirm = useSetRecoilState(confirmationConfirm);
    // setOpenConfirmation(true)
    // setConfirmationTitle(title)
    // setConfirmationMessage(message)
    // setConfirmationCancel(onCancel)
    // setConfirmationConfirm(onConfirm)

    console.log("Opened Model")

    return 

}