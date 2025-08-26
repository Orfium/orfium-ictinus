import styled from '@emotion/styled';
import { Unstyled } from '@storybook/addon-docs/blocks';

import { InlineAlert, Link, type AlertStatus } from '@orfium/ictinus';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  container-type: inline-size;
  width: 100%;
`;

type Action = {
  url: string;
  content: string;
};

type AlertProps = {
  status: AlertStatus;
  action?: Action;
  description: string;
};

export function Alert({ status = 'informational', action, description }: AlertProps) {
  return (
    <Unstyled>
      <Container>
        <InlineAlert
          status={status}
          actions={
            action ? (
              <Link href={action.url} size={2}>
                {action.content}
              </Link>
            ) : null
          }
        >
          {description}
        </InlineAlert>
      </Container>
    </Unstyled>
  );
}
