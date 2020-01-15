import React from 'react';
import { Link } from 'react-router-dom';

export default ({
    children
}) => {
    return (
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">主页</Link>
              </li>
              <li>
                <Link to="/reading">读书</Link>
              </li>
              <li>
                <Link to="/travel">旅行</Link>
              </li>
              <li>
                <Link to="/blog">博客</Link>
              </li>
            </ul>
          </nav>
          {children()}
        </div>
    )
}