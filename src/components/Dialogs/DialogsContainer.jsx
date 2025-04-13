import {connect} from "react-redux";
import dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/AuthRedirect";

const DialogsWithRedirect = withAuthRedirect(dialogs);
const mapStateToProps = () => {
    return {};
}
const mapDispatchToProps = () => {
    return {}
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithRedirect);

export default DialogsContainer;