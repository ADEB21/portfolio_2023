import React from "react";
import FormStyle from "../Form/form.module.scss"
import Button from "../../atoms/Button"
import { useForm, ValidationError } from "@formspree/react";
const endpoint = import.meta.env.PUBLIC_EMAIL_ENDPOINT
const Index = () => {
  const [state, handleSubmit] = useForm(endpoint);
  if (state.succeeded) {
    return <p>Votre email a bien été envoyé</p>;
  }
  return (
    <form className={FormStyle.ad_form} onSubmit={handleSubmit}>
      <label htmlFor="firstName">Prénom</label>
      <input id="firstName" type="text" placeholder="John" name="Prénom" />
      <ValidationError
        prefix="FirstName"
        field="firstName"
        errors={state.errors}
      />
      <label htmlFor="lastName">Nom</label>
      <input id="lastName" type="text" placeholder="Doe" name="Nom" />
      <ValidationError
        prefix="LastName"
        field="lastName"
        errors={state.errors}
      />
      <label htmlFor="email">Email</label>
      <input id="email" type="email"  placeholder="john.doe@exemple.com" name="Email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="email">Sujet</label>
      <input id="subject" type="text" placeholder="" name="Sujet" />
      <ValidationError
        prefix="Subject"
        field="subject"
        errors={state.errors}
      />
        

      <textarea maxLength="280" id="message" name="message" placeholder="Message (280 caractères max)" cols="50" rows="10" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      {/* <button type="submit" disabled={state.submitting}>
        Submit
      </button> */}

      <Button state={state.submitting} type="submit">Envoyer</Button>
    </form>
  );
};

export default Index;

{
  /* <form className={`${ContactSectionStyle.ad_contactSection_container_form}`} action="">
            
            <input required type="text" name="lastName" id="" placeholder="Nom" />
            <input required type="text" name="mail" id="" placeholder="E-mail" />
            <input required type="text" name="subject" id="" placeholder="Sujet" />
            <textarea required placeholder="Message" name="message" id="" cols="50" rows="10"></textarea>
            <Button type="submit"></Button>
        </form> */
}
