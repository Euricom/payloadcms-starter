import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface UaResetPasswordEmailProps {}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';

export const UaResetPasswordEmail = ({}: UaResetPasswordEmailProps) => (
  <Tailwind>
    <Html>
      <Head />
      <Preview>Reset your password</Preview>
      <Body className='flex h-screen flex-col items-center justify-center bg-gray-100 font-sans'>
        <Container className='max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900'>
          <Heading>Reset your password</Heading>
          <Section className='mt-[32px]'>
            <Img
              src={`${baseUrl}/static/uaLogoFound.png`}
              width='100'
              height='100'
              alt='Vercel'
              className='mx-auto my-0'
            />
            <Text className='text-center text-2xl font-bold text-gray-900 dark:text-gray-50'>
              uAntwerpen project
            </Text>
          </Section>
          <Text className='text-gray-500 dark:text-gray-50'>
            We&apos;ve received a request to reset the password for your account. To proceed, please
            click the button below to create a new password.
          </Text>
          <Section className='mb-[32px] mt-[32px] text-center'>
            <Button
              className='rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow-sm dark:bg-gray-100 dark:text-gray-900'
              href={'https://example.com'}
            >
              Reset password
            </Button>
          </Section>
          <Text className='text-gray-500 dark:text-gray-50'>
            If you didn&apos;t request a password reset, you can safely ignore this email.
          </Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default UaResetPasswordEmail;
