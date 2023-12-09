import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Marcus Berkeley</GradientText> 👋
        </>
      }
      description={
        <>
          <a className="text-cyan-600" href="/">
            Your One-Stop Solution in Toledo, Ohio: Notary and Marriage Minister
            Services
          </a>
          <br />
          Need notary services and a personalized wedding ceremony in Toledo?
          I've got you covered! As a dedicated Notary Public, I ensure swift and
          legally sound document handling. Plus, as a seasoned Marriage
          Minister, I create memorable ceremonies tailored to your unique love
          story. Enjoy the convenience of accessing both services in one place,
          with a commitment to professionalism and legal compliance. Let's make
          your important moments seamless and special!
        </>
      }
      // avatar={
      //   <img
      //     className="h-80 w-64"
      //     src="/assets/images/"
      //     alt="Avatar image"
      //     loading="lazy"
      //   />
      // }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
