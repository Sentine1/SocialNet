import React from 'react';
import Content from "./Content";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/ProfileReducer";
import {NavLink, useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";

class ContentContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (<Content {...this.props} profile={this.props.profile}/>)
    }
}

let AuthRedirectComponent = withAuthRedirect(ContentContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

///v6 Придётся писать самому
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {getUserProfile})(withRouter(AuthRedirectComponent));