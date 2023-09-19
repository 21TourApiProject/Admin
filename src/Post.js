import React, { useEffect, useState } from 'react';
import './Post.css';
import { Button } from 'react-bootstrap';
import InputBox from './UI/InputBox';

export default function Post() {

  return (
    <div className="post">
      <InputBox />
    </div>
  );
}
