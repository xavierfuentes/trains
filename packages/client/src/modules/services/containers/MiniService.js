import { connect } from 'react-redux';

import MiniService from '../components/MiniService';
import { activateService } from '../actions/services';

const mapStateToProps = state => ({
  active: state.services.active
});
const mapDispatchToProps = {
  activateService
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniService);
