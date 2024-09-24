import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Existing FeatureList for other sections
const FeatureList = [
  {
    title: 'What is LMOS',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        LMOS is a cloud-native, multi-tenant, multi-channel platform that simplifies the development of enterprise-ready Multi-Agent System (MAS) in the cloud. It extends Kubernetes and empowers developers to create intelligent, scalable, and adaptive Multi-Agent Systems with ease. 
      </>
    ),
  },
  {
    title: 'Open Specifications',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Join our working group dedicated to creating open specifications for a multi-agent ecosystem. As a member, you'll collaborate with experts to define standards for openness, interoperability, transparency, and accountability.
      </>
    ),
  },
  {
    title: 'Open Reference Implementations',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Be part of our collaborative effort to develop reference implementations for the specifications. Join us in building a foundation for an open multi-agent ecosystem.
      </>
    ),
  },
];

// New Technical Steering Committee List with 4 members
// const TSCList = [
//   {
//     name: 'Arun Joseph',
//     position: 'Technical Steering Committee',
//     imgSrc: require('@site/static/img/arunjoshep.jpeg').default,
//     bio: 'Experienced leader in open-source technologies and distributed systems.',
//   },
//   {
//     name: 'Robert Wrinkler',
//     position: 'Technical Steering Committee',
//     imgSrc: require('@site/static/img/rob.jpeg').default,
//     bio: 'Chief Scientist and Co-founder of Hedera Hashgraph.',
//   },
//   {
//     name: 'Patrick whelan',
//     position: 'Technical Steering Committee',
//     imgSrc: require('@site/static/img/patrick.jpeg').default,
//     bio: 'Expert in UI frameworks and distributed technologies.',
//   },
//   {
//     name: 'Jasbir Singh',
//     position: 'Technical Steering Committee',
//     imgSrc: require('@site/static/img/jasbirsingh.jpeg').default,
//     bio: 'Blockchain architect and a leading voice in decentralization.',
//   },
// ];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

// New Component for Technical Steering Committee
// function TSCMember({name, position, imgSrc, bio}) {
//   return (
//     <div className={clsx('col col--3')}> {/* 4 members - col--3 for equal spacing */}
//       <div className="text--center">
//         <img className={styles.tscImage} src={imgSrc} alt={name} />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{name}</Heading>
//         <p>{position}</p>
//         <p>{bio}</p>
//       </div>
//     </div>
//   );
// }

export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      
      {/* <section className={styles.tscSection}>
        <div className="container">
          <Heading as="h2" className="text--center">Technical Steering Committee</Heading>
          <div className="row">
            {TSCList.map((props, idx) => (
              <TSCMember key={idx} {...props} />
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
