import React, { useState } from 'react';
import { Package, TrendingUp, Award } from 'lucide-react';

const CrateSimulator = () => {
  const [selectedCrate, setSelectedCrate] = useState(null);
  const [openAmount, setOpenAmount] = useState(1);
  const [results, setResults] = useState([]);
  const [isOpening, setIsOpening] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [statistics, setStatistics] = useState({});

  const crates = [
  {
    name: "Architect's Crate",
    itemName: "Architect's Contract",
    crateBoxImage: "/images/Architect Crate.png",
    rareImage: "/images/rare architect contract.png",
    eliteImage: "/images/elite architect contract.png",
    grandImage: "/images/grand architect contract.png",
    simpleImage: "/images/simple architect contract.png",
    plainImage: "/images/plain architect contract.png",
    rareProbability: 0.7,
    eliteProbability: 0.25,
    grandProbability: 0.1,
    simpleProbability: 1.0,
    plainProbability: 1.3
  },
  {
    name: "Investor's Crate",
    itemName: "Investor's Contract",
    crateBoxImage: "/images/Investor Crate.png",
    rareImage: "/images/rare investor contract.png",
    eliteImage: "/images/elite investor contract.png",
    grandImage: "/images/grand investor contract.png",
    simpleImage: "/images/simple investor contract.png",
    plainImage: "/images/plain investor contract.png",
    rareProbability: 0.85,
    eliteProbability: 0.24,
    grandProbability: 0.12,
    simpleProbability: 1.0,
    plainProbability: 1.3
  },
  {
    name: "Valkyra Crate",
    itemName: "Melee Contract",
    crateBoxImage: "/images/Valkyra Crate.png",
    rareImage: "/images/rare melee contract.png",
    eliteImage: "/images/elite melee contract.png",
    grandImage: "/images/grand melee contract.png",
    simpleImage: "/images/simple melee contract.png",
    plainImage: "/images/plain melee contract.png",
    rareProbability: 0.7,
    eliteProbability: 0.34,
    grandProbability: 0.05,
    simpleProbability: 1.0,
    plainProbability: 1.4
  },
  {
    name: "Detective Crate",
    itemName: "Shoes Contract",
    crateBoxImage: "/images/Detective Crate.png",
    rareImage: "/images/rare shoe contract.png",
    eliteImage: "/images/elite shoe contract.png",
    grandImage: "/images/grand shoe contract.png",
    simpleImage: "/images/simple shoe contract.png",
    plainImage: "/images/plain shoe contract.png",
    rareProbability: 0.71,
    eliteProbability: 0.19,
    grandProbability: 0.01,
    simpleProbability: 1.0,
    plainProbability: 1.4
  },
  {
    name: "Merciless Rider Crate",
    itemName: "Pants Contract",
    crateBoxImage: "/images/Merciless Rider Crate.png",
    rareImage: "/images/rare pants contract.png",
    eliteImage: "/images/elite pants contract.png",
    grandImage: "/images/grand pants contract.png",
    simpleImage: "/images/simple pants contract.png",
    plainImage: "/images/plain pants contract.png",
    rareProbability: 0.75,
    eliteProbability: 0.34,
    grandProbability: 0.05,
    simpleProbability: 1.0,
    plainProbability: 1.5
  },
  {
    name: "Narc Dealer Crate",
    itemName: "Tops Contract",
    crateBoxImage: "/images/Narc Dealer Crate.png",
    rareImage: "/images/rare tops contract.png",
    eliteImage: "/images/elite tops contract.png",
    grandImage: "/images/grand tops contract.png",
    simpleImage: "/images/simple tops contract.png",
    plainImage: "/images/plain tops contract.png",
    rareProbability: 0.81,
    eliteProbability: 0.31,
    grandProbability: 0.09,
    simpleProbability: 1.0,
    plainProbability: 1.5
  },
  {
    name: "The Merc Crate",
    itemName: "Range Contract",
    crateBoxImage: "/images/Merc Crate.png",
    rareImage: "/images/rare range contract.png",
    eliteImage: "/images/elite range contract.png",
    grandImage: "/images/grand range contract.png",
    simpleImage: "/images/simple range contract.png",
    plainImage: "/images/plain range contract.png",
    rareProbability: 0.95,
    eliteProbability: 0.24,
    grandProbability: 0.09,
    simpleProbability: 1.0,
    plainProbability: 1.5
  },
  {
    name: "Mob Boss Crate",
    itemName: "Accessories Contract",
    crateBoxImage: "/images/Mob Boss Crate.png",
    rareImage: "/images/rare accessories contract.png",
    eliteImage: "/images/elite accessories contract.png",
    grandImage: "/images/grand accessories contract.png",
    simpleImage: "/images/simple accessories contract.png",
    plainImage: "/images/plain accessories contract.png",
    rareProbability: 0.84,
    eliteProbability: 0.28,
    grandProbability: 0.06,
    simpleProbability: 1.0,
    plainProbability: 1.5
  },
  {
    name: "Legacy Crate",
    itemName: "Legacy Coin",
    crateBoxImage: "/images/Legacy Crate.png",
    rareImage: "/images/rare legacy coin.png",
    eliteImage: "/images/elite legacy coin.png",
    grandImage: "/images/grand legacy coin.png",
    simpleImage: "/images/simple legacy coin.png",
    plainImage: "/images/plain legacy coin.png",
    rareProbability: 2.57,
    eliteProbability: 0.96,
    grandProbability: 1.39,
    simpleProbability: 20.0,
    plainProbability: 75.08,
    isLegacy: true
  },
  {
    name: "Challengers Crate",
    itemName: "Challenger's Contract",
    crateBoxImage: "/images/Challenger Crate.png",
    rareImage: "/images/rare challengers contract.png",
    eliteImage: "/images/elite challengers contract.png",
    grandImage: "/images/grand challengers contract.png",
    simpleImage: "/images/simple challengers contract.png",
    plainImage: "/images/plain challengers contract.png",
    rareProbability: 1.19,
    eliteProbability: 0.28,
    grandProbability: 0.04,
    simpleProbability: 1.3,
    plainProbability: 1.5
  },
  {
    name: "Godfather's Crate",
    itemName: "Godfather's Contract",
    crateBoxImage: "/images/Godfather Crate.png",
    rareImage: "/images/rare god father contract.png",
    eliteImage: "/images/elite god father contract.png",
    grandImage: "/images/grand god father contract.png",
    simpleImage: "/images/simple god father contract.png",
    plainImage: "/images/plain god father contract.png",
    rareProbability: 0.26,
    eliteProbability: 0.07,
    grandProbability: 0.04,
    simpleProbability: 0.5,
    plainProbability: 0.7
  }
];

  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1f2937 0%, #111827 50%, #000000 100%)',
      color: 'white',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    container: {
      maxWidth: '80rem',
      margin: '0 auto'
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      background: 'linear-gradient(to right, #fbbf24, #f97316)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center'
    },
    subtitle: {
      color: '#9ca3af',
      fontSize: '1.125rem',
      textAlign: 'center',
      marginBottom: '3rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem'
    },
    card: {
      backgroundColor: '#1f2937',
      borderRadius: '0.5rem',
      padding: '1.5rem',
      border: '2px solid #374151',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    button: {
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      border: 'none',
      transition: 'all 0.3s',
      fontSize: '1rem'
    },
    buttonBack: {
      backgroundColor: '#374151',
      color: 'white',
      marginBottom: '1.5rem'
    },
    buttonOpen: {
      background: 'linear-gradient(to right, #fbbf24, #f97316)',
      color: 'black',
      flex: 1
    },
    buttonReset: {
      backgroundColor: '#dc2626',
      color: 'white',
      padding: '0.5rem 1rem',
      fontSize: '0.875rem'
    },
    input: {
      padding: '0.75rem 1rem',
      backgroundColor: '#111827',
      border: '2px solid #374151',
      borderRadius: '0.5rem',
      width: '8rem',
      textAlign: 'center',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: 'white'
    },
    statBox: {
      backgroundColor: '#111827',
      padding: '1rem',
      borderRadius: '0.5rem',
      textAlign: 'center'
    },
    resultCard: {
      position: 'relative',
      backgroundColor: '#111827',
      borderRadius: '0.5rem',
      padding: '1rem',
      transition: 'all 0.3s'
    },
    footer: {
      marginTop: '3rem',
      padding: '2rem',
      backgroundColor: '#1f2937',
      borderRadius: '0.5rem',
      border: '2px solid #374151',
      textAlign: 'center'
    },
    youtubeButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.75rem 1.5rem',
      backgroundColor: '#dc2626',
      color: 'white',
      borderRadius: '0.5rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      border: 'none',
      transition: 'all 0.3s',
      textDecoration: 'none',
      fontSize: '1rem',
      marginTop: '1rem'
    }
  };

  const getRarityColor = (rarity) => {
    switch(rarity) {
      case 'Grand': return 'linear-gradient(to right, #fbbf24, #f97316)';
      case 'Elite': return 'linear-gradient(to right, #c084fc, #ec4899)';
      case 'Rare': return 'linear-gradient(to right, #60a5fa, #06b6d4)';
      case 'Simple': return 'linear-gradient(to right, #10b981, #059669)';
      case 'Plain': return 'linear-gradient(to right, #6b7280, #4b5563)';
      case 'Junk': return 'linear-gradient(to right, #1f2937, #111827)';
      default: return 'linear-gradient(to right, #9ca3af, #4b5563)';
    }
  };

  const getRarityBorder = (rarity) => {
    switch(rarity) {
      case 'Grand': return { border: '2px solid #fbbf24', boxShadow: '0 10px 15px -3px rgba(251, 191, 36, 0.5)' };
      case 'Elite': return { border: '2px solid #c084fc', boxShadow: '0 10px 15px -3px rgba(192, 132, 252, 0.5)' };
      case 'Rare': return { border: '2px solid #60a5fa', boxShadow: '0 10px 15px -3px rgba(96, 165, 250, 0.5)' };
      case 'Simple': return { border: '2px solid #10b981', boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.5)' };
      case 'Plain': return { border: '2px solid #6b7280', boxShadow: '0 10px 15px -3px rgba(107, 114, 128, 0.3)' };
      case 'Junk': return { border: '2px solid #374151', boxShadow: '0 10px 15px -3px rgba(55, 65, 81, 0.2)' };
      default: return { border: '2px solid #6b7280', boxShadow: '0 10px 15px -3px rgba(107, 114, 128, 0.3)' };
    }
  };

  const rollItem = (crate) => {
    const rand = Math.random() * 100;
    
    if (rand < crate.grandProbability) {
      return { rarity: 'Grand', name: crate.itemName, image: crate.grandImage };
    } else if (rand < crate.grandProbability + crate.eliteProbability) {
      return { rarity: 'Elite', name: crate.itemName, image: crate.eliteImage };
    } else if (rand < crate.grandProbability + crate.eliteProbability + crate.rareProbability) {
      return { rarity: 'Rare', name: crate.itemName, image: crate.rareImage };
    } else if (rand < crate.grandProbability + crate.eliteProbability + crate.rareProbability + crate.simpleProbability) {
      return { rarity: 'Simple', name: crate.itemName, image: crate.simpleImage };
    } else if (rand < crate.grandProbability + crate.eliteProbability + crate.rareProbability + crate.simpleProbability + crate.plainProbability) {
      return { rarity: 'Plain', name: crate.itemName, image: crate.plainImage };
    } else {
      return { rarity: 'Junk', name: 'Junk Item', image: null };
    }
  };

  const openCrates = async () => {
    if (!selectedCrate || openAmount < 1 || openAmount > 100) return;
    
    setIsOpening(true);
    setShowResults(false);
    setResults([]);

    const crate = crates.find(c => c.name === selectedCrate);
    const newResults = [];
    const stats = { Junk: 0, Plain: 0, Simple: 0, Rare: 0, Elite: 0, Grand: 0 };

    for (let i = 0; i < openAmount; i++) {
      await new Promise(resolve => setTimeout(resolve, 50));
      const result = rollItem(crate);
      newResults.push(result);
      stats[result.rarity]++;
    }

    setResults(newResults);
    setStatistics(prev => ({
      ...prev,
      [selectedCrate]: {
        total: (prev[selectedCrate]?.total || 0) + openAmount,
        ...Object.keys(stats).reduce((acc, key) => ({
          ...acc,
          [key]: (prev[selectedCrate]?.[key] || 0) + stats[key]
        }), {})
      }
    }));

    setIsOpening(false);
    setShowResults(true);
  };

  const resetStats = () => {
    setStatistics({});
    setResults([]);
    setShowResults(false);
  };

  if (!selectedCrate) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <h1 style={styles.title}>Loot Crate Simulator</h1>
          <p style={styles.subtitle}>Select a crate to begin opening</p>

          <div style={styles.grid}>
            {crates.map((crate, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCrate(crate.name)}
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#fbbf24';
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(251, 191, 36, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#374151';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Package size={32} color="#fbbf24" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{crate.name}</h3>
                </div>
                {crate.crateBoxImage && (
  <div style={{ 
    width: '100%', 
    height: '150px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: '1rem',
    backgroundColor: '#111827',
    borderRadius: '0.5rem',
    padding: '0.5rem'
  }}>
    <img 
      src={crate.crateBoxImage} 
      alt={crate.name}
      style={{ 
        maxWidth: '100%', 
        maxHeight: '100%', 
        objectFit: 'contain'
      }}
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
  </div>
)}
                <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>{crate.itemName}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#fbbf24' }}>◆ Grand</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#c084fc' }}>◆ Elite</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#60a5fa' }}>◆ Rare</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#10b981' }}>◆ Simple</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#6b7280' }}>◆ Plain</span>
                  </div>
                  {!crate.isLegacy && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#374151' }}>◆ Junk</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={styles.footer}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Enjoying the Crate Simulator?</h3>
            <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>
              Support the creator by subscribing to the YouTube channel or leaving a donation message in the comments!
            </p>
            <a 
              href="https://www.youtube.com/c/Kserske" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.youtubeButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b91c1c';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#dc2626';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Visit Kserske on YouTube
            </a>
          </div>
        </div>
      </div>
    );
  }

  const currentCrate = crates.find(c => c.name === selectedCrate);
  const currentStats = statistics[selectedCrate] || {};

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <button onClick={() => setSelectedCrate(null)} style={{ ...styles.button, ...styles.buttonBack }}>
          ← Back to Crate Selection
        </button>

        <div style={{ ...styles.card, marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Package size={48} color="#fbbf24" />
            <div>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>{selectedCrate}</h2>
              <p style={{ color: '#9ca3af' }}>{currentCrate.itemName}</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={styles.statBox}>
              <p style={{ color: '#fbbf24', fontWeight: 'bold' }}>Grand</p>
              <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Ultra Rare</p>
            </div>
            <div style={styles.statBox}>
              <p style={{ color: '#c084fc', fontWeight: 'bold' }}>Elite</p>
              <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Very Rare</p>
            </div>
            <div style={styles.statBox}>
              <p style={{ color: '#60a5fa', fontWeight: 'bold' }}>Rare</p>
              <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Uncommon</p>
            </div>
            <div style={styles.statBox}>
              <p style={{ color: '#10b981', fontWeight: 'bold' }}>Simple</p>
              <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Uncommon</p>
            </div>
            <div style={styles.statBox}>
              <p style={{ color: '#6b7280', fontWeight: 'bold' }}>Plain</p>
              <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Common</p>
            </div>
            {!currentCrate.isLegacy && (
              <div style={styles.statBox}>
                <p style={{ color: '#374151', fontWeight: 'bold' }}>Junk</p>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Common</p>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <label style={{ fontSize: '1rem', fontWeight: 'bold' }}>Amount to Open:</label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={openAmount}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === '') {
                    setOpenAmount('');
                  } else {
                    const num = parseInt(value);
                    if (!isNaN(num) && num >= 1 && num <= 100) {
                      setOpenAmount(num);
                    }
                  }
                }}
                onBlur={(e) => {
                  if (e.target.value === '' || parseInt(e.target.value) < 1) {
                    setOpenAmount(1);
                  }
                }}
                style={styles.input}
                placeholder="1-100"
              />
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[1, 5, 10, 25, 50, 100].map(amount => (
                <button
                  key={amount}
                  onClick={() => setOpenAmount(amount)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    border: openAmount === amount ? '2px solid #fbbf24' : '2px solid #374151',
                    backgroundColor: openAmount === amount ? '#374151' : '#1f2937',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    if (openAmount !== amount) {
                      e.currentTarget.style.borderColor = '#6b7280';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (openAmount !== amount) {
                      e.currentTarget.style.borderColor = '#374151';
                    }
                  }}
                >
                  {amount}
                </button>
              ))}
            </div>
            <button
              onClick={openCrates}
              disabled={isOpening || !openAmount || openAmount < 1}
              style={{
                ...styles.button,
                ...(isOpening || !openAmount || openAmount < 1 ? { backgroundColor: '#4b5563', cursor: 'not-allowed' } : styles.buttonOpen)
              }}
            >
              {isOpening ? 'Opening...' : `Open ${openAmount || 0} Crate${openAmount > 1 ? 's' : ''}`}
            </button>
          </div>
        </div>

        {currentStats.total > 0 && (
          <div style={{ ...styles.card, marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <TrendingUp size={24} />
                Statistics
              </h3>
              <button onClick={resetStats} style={{ ...styles.button, ...styles.buttonReset }}>
                Reset Stats
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
              <div style={styles.statBox}>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Total Opens</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{currentStats.total}</p>
              </div>
              <div style={styles.statBox}>
                <p style={{ color: '#fbbf24', fontSize: '0.875rem' }}>Grand</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{currentStats.Grand || 0}</p>
                <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>{((currentStats.Grand || 0) / currentStats.total * 100).toFixed(2)}%</p>
              </div>
              <div style={styles.statBox}>
                <p style={{ color: '#c084fc', fontSize: '0.875rem' }}>Elite</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{currentStats.Elite || 0}</p>
                <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>{((currentStats.Elite || 0) / currentStats.total * 100).toFixed(2)}%</p>
              </div>
              <div style={styles.statBox}>
                <p style={{ color: '#60a5fa', fontSize: '0.875rem' }}>Rare</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{currentStats.Rare || 0}</p>
                <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>{((currentStats.Rare || 0) / currentStats.total * 100).toFixed(2)}%</p>
              </div>
              <div style={styles.statBox}>
                <p style={{ color: '#10b981', fontSize: '0.875rem' }}>Simple</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{currentStats.Simple || 0}</p>
                <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>{((currentStats.Simple || 0) / currentStats.total * 100).toFixed(2)}%</p>
              </div>
              <div style={styles.statBox}>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Plain</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{currentStats.Plain || 0}</p>
                <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>{((currentStats.Plain || 0) / currentStats.total * 100).toFixed(2)}%</p>
              </div>
              {!currentCrate.isLegacy && (
                <div style={styles.statBox}>
                  <p style={{ color: '#374151', fontSize: '0.875rem' }}>Junk</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{currentStats.Junk || 0}</p>
                  <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>{((currentStats.Junk || 0) / currentStats.total * 100).toFixed(2)}%</p>
                </div>
              )}
            </div>
          </div>
        )}

        {showResults && results.length > 0 && (
          <div style={styles.card}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={24} />
              Results ({results.length} items)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
              {Object.entries(
                results.reduce((acc, result) => {
                  const key = `${result.rarity}-${result.name}`;
                  if (!acc[key]) {
                    acc[key] = { ...result, count: 0 };
                  }
                  acc[key].count++;
                  return acc;
                }, {})
              ).map(([key, result]) => (
                <div key={key} style={{ ...styles.resultCard, ...getRarityBorder(result.rarity) }}>
                  <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.875rem', fontWeight: 'bold' }}>
                    x{result.count}
                  </div>
                  {result.image ? (
                    <img 
                      src={result.image} 
                      alt={result.name}
                      style={{ width: '100%', height: '8rem', objectFit: 'contain', marginBottom: '0.5rem', borderRadius: '0.5rem' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div style={{ width: '100%', height: '8rem', backgroundColor: '#1f2937', borderRadius: '0.5rem', marginBottom: '0.5rem', display: result.image ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Package size={48} color="#4b5563" />
                  </div>
                  <div style={{ textAlign: 'center', fontWeight: 'bold', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', marginBottom: '0.25rem', background: getRarityColor(result.rarity) }}>
                    {result.rarity}
                  </div>
                  <p style={{ textAlign: 'center', fontSize: '0.875rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{result.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CrateSimulator;