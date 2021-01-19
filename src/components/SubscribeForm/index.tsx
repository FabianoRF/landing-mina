import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import { Container } from './styles';

interface SimpleFormProps {
  onSubmitted: (formData: any) => void;
}
const url =
  'https://gmail.us7.list-manage.com/subscribe/post?u=b3a1a018004c07fe50d8bebfa&amp;id=830384d5b5';

const SimpleForm: React.FC<SimpleFormProps> = () => (
  <MailchimpSubscribe url={url} />
);

const CustomSubscribeForm: React.FC = () => (
  <Container>
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status }) => (
        <div>
          <SimpleForm onSubmitted={formData => subscribe(formData)} />
          {status === 'sending' && (
            <div style={{ color: 'blue' }}>sending...</div>
          )}
          {status === 'error' && <div style={{ color: 'red' }}>Erro...</div>}
          {status === 'success' && (
            <div style={{ color: 'green' }}>Subscribed !</div>
          )}
        </div>
      )}
    />
  </Container>
);

export default CustomSubscribeForm;
