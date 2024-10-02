import { FaBalanceScale, FaBolt, FaLock, FaUsers, FaCrown } from 'react-icons/fa';
import styles from './styles.module.css';

const FeatureList = [
    {
      Icon: FaBalanceScale,
      title: 'LMOS is open',
      description: 'Innovation thrives in an open environment. LMOS is part of an open ecosystem, inviting developers, data scientists, and organizations to collaborate and shape the future of Multi-Agent Systems.',
    },
    {
      Icon: FaBolt,
      title: 'LMOS is interoperable',
      description: 'Built for a interoperable agent ecosystem, LMOS leverages established open standards for agent communication, meta  discovery, and security, eliminating the need to reinvent the wheel.',
    },
    {
      Icon: FaBolt,
      title: 'LMOS is collaborative',
      description: 'AI agent collaboration improves problem-solving by harnessing the strengths of multiple models, boosting accuracy, efficiency, and adaptability. LMOS orchestrates these interactions with advanced routing based on Natural Language Understanding (NLU), allowing agents to work together seamlessly within a single, unified system.',
    },
    {
      Icon: FaLock,
      title: 'LMOS is cloud-native and scalable',
      description: 'As your AI needs grow, LMOS grows with you. Its cloud-native architecture dynamically scales from a few agents to hundreds, ensuring seamless performance without bottlenecks as your AI operations expand.',
    },
    {
      Icon: FaUsers,
      title: 'LMOS is modular',
      description: 'LMOS is built with modularity at its core, allowing you to easily integrate new modules in your preferred development language, making customization and expansion straightforward.',
    },
    {
      Icon: FaCrown,
      title: 'LMOS is extensible',
      description: 'Extensibility drives innovation. LMOS defines clear specifications, allowing you to quickly extend its ecosystem of agents and tools with minimal friction.',
    },
    {
      Icon: FaCrown,
      title: 'LMOS is multi-tenant capable',
      description: 'Built with enterprises in mind, LMOS is multi-tenant capable from the ground up. LMOS allows to efficiently manage multiple tenants and channels within the same infrastructure.',
    }
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
      <div className={styles.container}>
        
        <div className={styles.gridContainer}>
          
          <div className={styles.titleContainer}>
            <h1>What is LMOS?</h1>
            <p>
              LMOS is an <strong>open-source, vendor-neutral platform</strong> to build and run enterprise-ready <strong>multi-agent systems in the cloud</strong>.
              Our vision is to create a sovereign and open platform and ecosystem where AI agents can be developed, deployed, and integrated seamlessly across industries.
              Built on top of open standards and Kubernetes, it enables developers to build intelligent, scalable, and adaptive multi-agent systems.
            </p>
          </div>
         
          <div className={styles.features}>
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