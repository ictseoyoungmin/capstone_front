import React from 'react';
import { Container } from 'reactstrap';
import  './service.css';

const Service = () => {
    return (
        <Container>
          <div class="setcion_title">
            <h2 class="title">SERVICES</h2>
            <p class="inst">Deerlens는 기존과는 다른 네트워크로<br/>이미지 위조를 잡아냅니다.</p>
          </div>
          <ul class="service_list">
            <li class="Tech_feature01">
              <strong class="thick">Upload</strong>
                <p class="context">가나다라마바사<br/>가나다라마바사</p>
              </li>
              <li class="Tech_feature02">
                <strong class="thick">Forgery</strong>
                <p class="context">가나다라마바사<br/>가나다라마바사</p>
              </li>
              <li class="Tech_feature03">
                <strong class="thick">Search</strong>
                <p class="context">가나다라마바사<br/>가나다라마바사</p>
              </li>
          </ul>
      </Container>

    );
  }

export default Service;