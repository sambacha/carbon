import React, { PropTypes } from 'react';
import classNames from 'classnames';
// eslint-disable-next-line max-len, import/no-unresolved
import '../env-defined-then-loader?-EXCLUDE_SASS!@console/bluemix-components/consumables/scss/components/modules/modules.scss';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const ModuleBody = ({ children, className, ...other }) => {
  const wrapperClasses = classNames('bx--module__body', className);

  return (
    <div className={wrapperClasses} {...other}>
      {children}
    </div>
  );
};

ModuleBody.propTypes = propTypes;

export default ModuleBody;
