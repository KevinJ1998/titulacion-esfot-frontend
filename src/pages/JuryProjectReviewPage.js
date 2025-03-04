import React from "react";
import SubLayout from "../components/SubLayout";
import ProjectReview from "../components/ProjectReview";
import { Typography, Row, Col } from "antd";

const { Title } = Typography;
const JuryProjectReviewPage = ({ location }) => {
  return (
    <SubLayout>
      <Row>
        <Col>
          <Title level={3} style={{ color: "#034c70" }}>
            Proyecto de titulación
          </Title>
        </Col>
      </Row>
      <Row style={{ marginTop: 30 }}>
        <Col>
          <ProjectReview
            idPlan={location.state.idPlan}
            user={location.state.user}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 75 }}>
        <Col>
          <Title level={3} style={{ color: "#034c70" }}>
            Rúbrica de calificación
          </Title>
        </Col>
      </Row>
    </SubLayout>
  );
};

export default JuryProjectReviewPage;
