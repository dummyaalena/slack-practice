import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import hamburgerimg from '../icn_menu.png';
import '../css/customnavbar.css';
import {ic_home} from 'react-icons-kit/md/ic_home';
import {rocket} from 'react-icons-kit/entypo/rocket';
import {thLargeOutline} from 'react-icons-kit/typicons/thLargeOutline';
import {support} from 'react-icons-kit/typicons/support';
import {Icon} from 'react-icons-kit';

class CustomNavbar extends React.Component{
  render() {
    return (
        <div className="nav">
            <Container fluid={true}>
                <Row className="h-100 align-items-center">
                    <Col md={6} xs="auto" className="nav_brand d-flex flex-row">
                        <div className="ham_icon" > </div>
                        <div className="nav_menu">{' Menu '}</div>
                        <div className="vertical_line"> </div>
                        <div>
                            <Icon className="home_icon" size={32} icon={ic_home}/>
                            <span className="workspace_name"> {' insightworkshop'}
                            </span>
                        </div>
                    </Col>
                    <Col md={6} xs="auto">
                        <div className="d-flex justify-content-end right_icons">
                            <a href="#">
                                <span className="icon"><Icon size={32} icon={rocket}/></span>
                                <span className="label">Plans</span>
                            </a>
                            <a href="#">
                                <span className="icon"><Icon size={32} icon={thLargeOutline}/></span>
                                <span className="label">Workspaces</span>
                            </a>
                            <a href="#">
                                <span className="icon"><Icon size={32} icon={support}/></span>
                                <span className="label">Help</span>
                            </a>
                            <a href="#">
                                <img className="icon icon--slack_img" src="https://a.slack-edge.com/66f9/img/icons/ios-64.png" title="Slack" alt="Launch Slack" />
                                <span className="label">Launch</span>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}
export default CustomNavbar;