import {connect} from "react-redux";
import dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

const mapStateToProps = () => {
    return {};
}
const mapDispatchToProps = () => {
    return {}
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(dialogs);