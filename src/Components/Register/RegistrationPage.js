import React from 'react';
import { Elements } from 'react-stripe-elements';
import RegistrationForm from './RegistrationForm';

class RegisterPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="text-center">Team Registration</h1>
                <div>
                    <Elements>
                        <RegistrationForm /> 
                    </Elements>
                </div >
                <div>
                    <small className="text-muted">
                        By signing up for this tournament confirms my understanding that participation in this leisure activity is on a voluntary,
                        recreational basis and that there may be an element of risk involved. Savant Sporting Events, LLC and the host sites are not responsible
                        for any injury or accident sustained and encourages all participants to obtain insurance for player protection. By acceptance
                        of my entry, on behalf of myself, heirs and legal representative, do hereby release and forever discharge Savant Sporting Events, LLC
                        and all its representatives from any and all claims and demand of every kind, nature and character, for any and all damages,
                        losses, or injuries which I may sustain in connection with any aspect of participation in this voluntary recreational activity.
                    </small>
                </div>
            </React.Fragment>
        );
    }
}

export default RegisterPage;