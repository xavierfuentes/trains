import { connect } from 'react-redux';

import ServiceDetail from '../components/ServiceDetail';
import { fetchCallingPatternForService } from '../actions/services';

const mapStateToProps = state => ({
  service: state.services.active
});
const mapDispatchToProps = {
  fetchCallingPatternForService
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceDetail);
