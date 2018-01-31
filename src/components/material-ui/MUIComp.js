import React from 'react';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const MUIComp = () => (
  <div>
    <AppBar title="material-ui" />
    <RaisedButton label="Default Button" />
    <RaisedButton label="Primary" primary={true} />
    <RaisedButton label="Secondary" secondary={true} />
    <RaisedButton label="Disabled" disabled={true} />
  </div>
);

export default MUIComp;
