import React from "react";
import { IEmailTemplateProps } from "../Datatypes/interfaces";

const EmailTemplate: React.FC<Readonly<IEmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);

export default EmailTemplate;