import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="loader-container">
    <div class="loader">
  <div class="loader__bar"></div>
  <div class="loader__bar"></div>
  <div class="loader__bar"></div>
  <div class="loader__bar"></div>
  <div class="loader__bar"></div>
  <div class="loader__ball"></div>
</div>
</div>
  )
}

export default Loading