import { connect } from 'react-redux';

import Services from '../components/Services';
import { fetchAllServices } from '../actions/services';

const mapStateToProps = state => ({
  allServices: state.services.all,
  active: state.services.active
});
const mapDispatchToProps = {
  fetchAllServices
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
