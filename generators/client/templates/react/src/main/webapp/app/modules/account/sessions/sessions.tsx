import * as React from 'react';
import { connect } from 'react-redux';

import { Table, Button, Alert } from 'reactstrap';
import { Translate } from 'react-jhipster';

import { findAll, reset } from '../../../reducers/sessions';

// TODO: missing translation in case of fetch failure

const findAllFailureAlert = (
  <Alert color="danger">
    <strong>An error has occured!</strong> Couldn't fetch sessions.
  </Alert>
);

const invalidationFailureAlert = (
  <Alert color="danger">
    <Translate contentKey="sessions.messages.error"/>
  </Alert>
);

const successAlert = (
  <Alert color="success">
    <Translate contentKey="sessions.messages.success"/>
  </Alert>
);

export interface ISessionsProps {
  reset: Function;
  findAll: Function;
  requestSuccess: boolean;
  requestFailure: boolean;
  findAllError: boolean;
  invalidationError: boolean;
}

export class SessionsPage extends React.Component<ISessionsProps> {
  componentDidMount() {
    this.props.findAll();
  }

  render() {
    const { requestFailure, findAllError, invalidationError } = this.props;

    return (
      <div>
        { /* TODO: Put a translation in this h2 (contentKey is sessions.title). */ }
        <h2>Active sessions for <b>[FancyUsername]</b></h2>

        { (requestFailure && findAllError) ? findAllFailureAlert : undefined }
        { (requestFailure && invalidationError) ? invalidationFailureAlert : undefined }

        <Table responsive>
          <thead>
            <tr>
              <th><Translate contentKey="sessions.table.ipaddress" /></th>
              <th><Translate contentKey="sessions.table.useragent" /></th>
              <th><Translate contentKey="sessions.table.date" /></th>
              <th />
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>192.168.0.1</td>
            <td>firefox</td>
            <td>now</td>
            <td>
              <Button type="submit" color="primary">
                <Translate contentKey="sessions.table.button" />
              </Button>
            </td>
          </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = ({ sessions }) => ({
  requestSuccess: sessions.requestSuccess,
  requestFailure: sessions.requestFailure,
  findAllError: sessions.findAllError,
  invalidationError: sessions.invalidationError
});

const mapDispatchToProps = { findAll, reset };

export default connect(mapStateToProps, mapDispatchToProps)(SessionsPage);
