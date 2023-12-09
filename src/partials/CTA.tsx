import { GradientText, Section } from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    Contact me
    <GradientText>
      <a
        className="hover:underline"
        href="mailto:marcusberkeley@posteo.net?subject=Subject%20of%20the%20email&body=Hello%20there,"
      >
        {' '}
        marcusberkeley@posteo.net
      </a>
    </GradientText>
  </Section>
);

export { CTA };
