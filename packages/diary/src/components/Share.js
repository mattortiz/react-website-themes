import React from 'react';
import PropTypes from 'prop-types';
import { ShareBlockAside } from 'react-custom-share';
import { cx } from 'emotion';

import style from '../styles/share';

const PostShare = props => {
  const { themeStyle = style, customStyle = '', shareBlockProps } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <ShareBlockAside {...shareBlockProps} />
    </div>
  );
};

PostShare.propTypes = {
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  shareBlockProps: PropTypes.object,
};

export default PostShare;
