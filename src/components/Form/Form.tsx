import { Container, ContainerSucces } from './styles';
import { useForm, ValidationError } from '@formspree/react';
import { toast, ToastContainer } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';
import { useEffect, useState } from 'react';
import validator from 'validator';

export function Form() {
  const [state, handleSubmit] = useForm('xknkpqry');
  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState('');

  // ✅ Improved email validation
  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email));
  }

  // ✅ useEffect only runs when email is sent successfully
  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: "bottom-left",  // ✅ FIXED ISSUE (Now uses string instead)
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      });
    }
  }, [state.succeeded]); // ✅ Only runs when `state.succeeded` changes

  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => verifyEmail(e.target.value)}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <ReCAPTCHA
          sitekey="6Lfj9NYfAAAAAP8wPLtzrsSZeACIcGgwuEIRvbSg"
          onChange={() => setIsHuman(true)}
        />

        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message || !isHuman}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}