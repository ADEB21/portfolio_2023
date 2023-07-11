import React from "react";
import ContactSectionStyle from "./contactSection.module.scss";
import Form from "../../molecules/Form/Index"

const Index = () => {
  return (
    <section className={`${ContactSectionStyle.ad_contactSection}`}>
      <div className={`${ContactSectionStyle.ad_contactSection_container}`}>
        <h1>Contacter</h1>
        <Form/>
      </div>
    </section>
  );
};

export default Index;
