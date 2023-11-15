import React from "react";
import { Accordion } from "react-bootstrap";

export const AbilityItem = ({ ability }) => {
   return (
      <Accordion.Item eventKey={ability.title}>
         <Accordion.Header>{ability.title}</Accordion.Header>
         <Accordion.Body>{ability.description}</Accordion.Body>
      </Accordion.Item>
   );
};
