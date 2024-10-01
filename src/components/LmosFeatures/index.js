import { FaBalanceScale, FaBolt, FaLock, FaUsers, FaCrown } from 'react-icons/fa';
import styles from './styles.module.css';

const FeatureList = [
    {
      Icon: FaBalanceScale,
      title: 'LMOS is fair',
      description: 'Everybody should have equal access to all public forums. The hashgraph algorithm is leaderless. We all deserve a fair world.',
    },
    {
      Icon: FaBolt,
      title: 'LMOS is fast',
      description: 'The hashgraph algorithm isn’t just fair, it’s also fast. Transactions finalize quickly without sacrificing performance or security.',
    },
    {
      Icon: FaLock,
      title: 'LMOS is secure',
      description: 'The hashgraph algorithm is asynchronous Byzantine Fault Tolerant (ABFT), providing the highest security available.',
    },
    {
      Icon: FaUsers,
      title: 'LMOS is decentralized',
      description: 'No one entity has control. The decentralized nature ensures equal access, security, and transparency.',
    },
    {
      Icon: FaCrown,
      title: 'LMOS is leaderless',
      description: 'With a leaderless consensus protocol, we prevent denial-of-service and secure the network from centralization.',
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
              LMOS, a <a href="https://www.linuxfoundation.org/">Linux Foundation Decentralized Trust</a> project, is an open-source, vendor-neutral distributed ledger technology.
              LMOS is used to build the <a href="https://hedera.com/">Hedera</a> public ledger.
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