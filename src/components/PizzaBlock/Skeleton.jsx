import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={490}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="8" y="270" rx="10" ry="10" width="258" height="24" />
    <rect x="2" y="320" rx="10" ry="10" width="272" height="72" />
    <rect x="4" y="429" rx="10" ry="10" width="85" height="33" />
    <circle cx="138" cy="132" r="131" />
    <rect x="143" y="415" rx="18" ry="18" width="132" height="52" />
  </ContentLoader>
);

export default Skeleton;
