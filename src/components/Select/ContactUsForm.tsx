import omit from 'lodash/omit';
import React from 'react';
import { Field, Form } from 'react-final-form';

import { ContactUsContainer, SelectWrapper } from './ContactUsForm.style';
import Select, { SelectOption } from './Select';
import Button from 'components/Button';
// import { getEmailSubjectOptions } from './utils';

type FormType = {
  subject: {
    value: string;
    label: string;
  };
  body: string;
};
type EmailSubjectType = {
  label: string;
  value: string;
};

type EmailFormValues = {
  subject: EmailSubjectType;
};

type ContactUsParams = {
  'delete-account': string;
  'cancel-membership': string;
  'writer-request-changes': string;
};

type Props = {
  action?: keyof ContactUsParams;
  writer?: string;
  disabledSubject?: boolean;
};

export const getEmailSubjectOptions = (): SelectOption[] => [
  {
    label: 'Edit Work',
    value: 'editWork',
  },
  {
    label: 'Delete Work',
    value: 'deleteWork',
  },
  {
    label: 'Verify Account',
    value: 'verifyAccount',
  },

  {
    label: 'Delete Account',
    value: 'deleteAccount',
  },
  {
    label: 'Cancel Membership',
    value: 'cancelMembership',
  },
  {
    label: 'editWork',
    value: 'writerRequestChanges',
  },
  {
    label: 'Other',
    value: 'other',
  },
];

const ContactUsForm: React.FC<Props> = ({ action, writer, disabledSubject = false }) => {
  const handleSubmit = (values: EmailFormValues) => {
    console.log(values);
  };

  const formValidation = (values: FormType) => {
    const errors = {} || {
      subject: '',
    };

    if (!values.subject?.value) {
      errors.subject = 'This field is mandatory';
    }

    console.log(values.subject?.value);

    return errors;
  };

  const options = getEmailSubjectOptions();

  return (
    <Form onSubmit={handleSubmit} validate={formValidation}>
      {({ handleSubmit, pristine, valid, submitting }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <ContactUsContainer>
              <Field name="subject">
                {props => {
                  const hasError = props.meta.touched && props.meta.invalid;

                  return (
                    <SelectWrapper isDisabled={disabledSubject} hasValue={false}>
                      <Select
                        label={'title'}
                        styleType="outlined"
                        disabled={disabledSubject}
                        size="md"
                        required
                        options={options}
                        status={hasError ? 'error' : 'hint'}
                        hintMsg={hasError ? props.meta.error : 'This is a hint message'}
                        {...omit(props.input, ['onFocus'])}
                        selectedOption={options.find(
                          option => option.value === props.input.value.value
                        )}
                        handleSelectedOption={props.input.onChange}
                        dataTestId="contact_us"
                      />
                    </SelectWrapper>
                  );
                }}
              </Field>

              <div css={{ marginTop: '32px' }}>
                <Button
                  onClick={() => console.log(1)}
                  disabled={pristine || !valid || submitting}
                  type="primary"
                  buttonType="submit"
                  dataTestId="contactus"
                >
                  {'send'}
                </Button>
              </div>
            </ContactUsContainer>
          </div>
        </form>
      )}
    </Form>
  );
};

export default ContactUsForm;
