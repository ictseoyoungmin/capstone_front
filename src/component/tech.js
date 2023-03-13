import React from 'react';
import { Container } from 'reactstrap';
import  './tech.css';
import styled from 'styled-components';


const Tech = () => {
    return (
       
        <div className="body">
            <h3 className='title'>TechNology</h3>
                <p>Deerlens의 기술들을 보여줍니다.</p>
                <div class="quotes">
                    <div >
                    <div class="box box1">
                        <p>Deerlens는 Ringed Residual Block을 
                        <br/>사용하여 Identity Mapping을 
                        <br/>효과적으로 수행합니다.</p>
                    </div>
                    <div class="bg"></div>
                    </div>
                    <div>
                    <div class="box box2">
                        <p>단순한 구조로<br/>빠른 성능을 자랑합니다.</p>
                    </div>
                    <div class="bg"></div>
                    </div>
                    <div>
                    <div class="box box3">
                        <p>SOTA급 DCT Domain<br/>학습 모듈을 적용했습니다.</p>
                        
                    </div>
                    <div class="bg"></div>
                    </div>
            </div>
        </div> 
       
    );
  }

export default Tech;