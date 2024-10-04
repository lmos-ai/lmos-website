import styles from './styles.module.css';

import { FaGlobe, FaPlug, FaUsers, FaCloud, FaPuzzlePiece, FaLayerGroup, FaBuilding } from 'react-icons/fa';

const FeatureList = [
  {
    Icon: FaGlobe,
    title: (
      <>
        LMOS is <span className={styles.featuretext}>open</span>
      </>
    ),
    description: 'Innovation thrives in an open environment. LMOS is part of an open ecosystem, inviting developers, data scientists, and organizations to collaborate and shape the future of Multi-Agent Systems.',
  },
  {
    Icon: FaPlug,
    title: (
      <>
        LMOS is <span className={styles.featuretext}>interoperable</span>
      </>
    ),
    description: 'Built for a interoperable agent ecosystem, LMOS leverages established open standards for agent communication, meta discovery, and security, eliminating the need to reinvent the wheel.',
  },
  {
    Icon: FaUsers,
    title: (
      <>
        LMOS is <span className={styles.featuretext}>collaborative</span>
      </>
    ),
    description: 'AI agent collaboration improves problem-solving by harnessing the strengths of multiple models, boosting accuracy, efficiency, and adaptability. LMOS orchestrates these interactions with advanced routing based on Natural Language Understanding (NLU), allowing agents to work together seamlessly within a single, unified system.',
  },
  {
    Icon: FaCloud,
    title: (
      <>
        LMOS is <span className={styles.featuretext}>cloud-native and scalable</span>
      </>
    ),
    description: 'As your AI needs grow, LMOS grows with you. Its cloud-native architecture dynamically scales from a few agents to hundreds, ensuring seamless performance without bottlenecks as your AI operations expand.',
  },
  {
    Icon: FaPuzzlePiece,
    title: (
      <>
        LMOS is <span className={styles.featuretext}>modular</span>
      </>
    ),
    description: 'LMOS is built with modularity at its core, allowing you to easily integrate new modules in your preferred development language, making customization and expansion straightforward.',
  },
  {
    Icon: FaLayerGroup,
    title: (
      <>
        LMOS is <span className={styles.featuretext}>extensible</span>
      </>
    ),
    description: 'Extensibility drives innovation. LMOS defines clear specifications, allowing you to quickly extend its ecosystem of agents and tools with minimal friction.',
  },
  {
    Icon: FaBuilding,
    title: (
      <>
        LMOS is <span className={styles.featuretext}>multi-tenant capable</span>
      </>
    ),
    description: 'Built with enterprises in mind, LMOS is multi-tenant capable from the ground up. LMOS allows to efficiently manage multiple tenants and channels within the same infrastructure.',
  },
];

  function Feature({ Icon, title, description }) {
    return (
        <div className={styles.feature}> {/* Use CSS module class */}
            <div className={styles.icon}> {/* Use CSS module class */}
                {Icon && <Icon />}
            </div>
            <div className={styles.text}> {/* New container for title and description */}
                <h2 className={styles.title}>{title}</h2> {/* Optional styling for the title */}
                <p className={styles.description}>{description}</p> {/* Optional styling for description */}
            </div>
        </div>
    );
  }
  
  export default function Features() {
    return (
      <div className="container--fluid padding--lg">
        <div className="row">
          <div className="col col--4 col--sm-12 padding--md">
            <h1>What is LMOS?</h1>
            <p>
              LMOS is an <strong>open-source, vendor-neutral platform</strong> to build and run enterprise-ready <strong>multi-agent systems in the cloud</strong>.
              <br /> <br />
              Our vision is to create a sovereign and open platform and ecosystem where AI agents can be developed, deployed, and integrated seamlessly across networks and industries.
              Built on top of open standards and Kubernetes, it enables developers to build intelligent, scalable, and adaptive multi-agent systems.
            </p>
          </div>
         
          <div className="col col--8 col--sm-12 padding--md">
            {FeatureList.map((feature, idx) => (
              <Feature
                key={idx}
                Icon={feature.Icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }