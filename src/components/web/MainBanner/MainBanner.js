import React  from 'react'
import './MainBanner.scss';
import { Row, Col} from 'antd';



export default function MainBanner() {
  
    return (
      <div className="main-banner">
          <div className="main-banner__dark"/>
          <Row>
            <Col lg={4}/>
            <Col lg={16}>
              <h2>Aprendo y sigo <br/> mejorando en estas tecnologías de desarrollo</h2>
              <h3>  A través de cursos practicos, concisos y actualizados, creados por <br/> profesores de renombre en la comunidad de desarrollo</h3>
            
            </Col>
            <Col lg={4}/>

          </Row>
      </div>
    )
} 