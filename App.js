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
      rareImage: "https://drive.google.com/uc?export=view&id=1RiJxrsASIqKwK3Xh7Xzrno4RWxQYnrq8",
      eliteImage: "https://drive.google.com/uc?export=view&id=1jvo8-BrN-FhxTIVDmk4DFfJfURO-QXIE",
      grandImage: "https://drive.google.com/uc?export=view&id=18bpDQHg5Ue7030XyWq6h7EPeS3vGrnFz",
      rareProbability: 0.7,
      eliteProbability: 0.25,
      grandProbability: 0.1
    },
    {
      name: "Investor's Crate",
      itemName: "Investor's Contract",
      rareImage: "https://drive.google.com/uc?export=view&id=1sExV2DrCm2LJ609tSnc93owzquf81azT",
      eliteImage: "https://drive.google.com/uc?export=view&id=1hy22-wTFYwHA6nJyZ1GXD2NWoypo7zI8",
      grandImage: "https://drive.google.com/uc?export=view&id=12L9ryQRF8_EYd0AyYhcDkD3tldu2Iprf",
      rareProbability: 0.85,
      eliteProbability: 0.24,
      grandProbability: 0.12
    },
    {
      name: "Valkyra Crate",
      itemName: "Melee Contract",
      rareImage: "https://drive.google.com/uc?export=view&id=11gsvnzWZTQ6GXtlH_iUDFZJVNJ5sgba2",
      eliteImage: "https://drive.google.com/uc?export=view&id=1_xcUnzH-oaoK8W8BG46b7Dr1QAu8itOE",
      grandImage: "https://drive.google.com/uc?export=view&id=1dSt_KbM7TdfyybOkE1bBHksuZOGlk_r-",
      rareProbability: 0.7,
      eliteProbability: 0.34,
      grandProbability: 0.05
    },
    {
      name: "Detective Crate",
      itemName: "Shoes Contract",
      rareImage: "https://drive.google.com/uc?export=view&id=1EvRCbYq_ZnRFjSk5K7UFdrxRbjHZdFjp",
      eliteImage: "https://drive.google.com/uc?export=view&id=14pWEi15P8AJWDGzHnVz3x4GW9C2T_8xU",
      grandImage: "https://drive.google.com/uc?export=view&id=1vJwDAKXb8IiU6pLYypcMSwk2l6VAkIVi",
      rareProbability: 0.71,
      eliteProbability: 0.19,
      grandProbability: 0.01
    },
    {
      name: "Merciless Rider Crate",
      itemName: "Pants Contract",
      rareImage: "https://drive.google.com/uc?export=view&id=1c3Q65S_TJ2rx6MC3S0WzMQ7WwhrU4Z2P",
      eliteImage: "https://drive.google.com/uc?export=view&id=1R05LGndMM5oTP5M3ft_09ZJe3xonaZVc",
      grandImage: "https://drive.google.com/uc?export=view&id=1iWr89pfGBnOn7BZmkj83BrSN7Fr6W5Qd",
      rareProbability: 0.75,
      eliteProbability: 0.34,
      grandProbability: 0.05
    },
    {
      name: "Narc Dealer Crate",
      itemName: "Tops Contract",
      rareImage: "https://drive.google.com/uc?export=view&id=1U9WBw7J1mKcd6rYjA1s9OUxRszau5tpg",
      eliteImage: "https://drive.google.com/uc?export=view&id=14pTrSCxtISot4voyuzIJSv9-kwqvuAHH",
      grandImage: "https://drive.google.com/uc?export=view&id=1f-PBBh4tY2MUOM_iqGPdt2Tu2fMppQX-",
      rareProbability: 0.81,
      eliteProbability: 0.31,
      grandProbability: 0.09
    },
    {
      name: "The Merc Crate",
      itemName: "Range Contract",
      rareImage: "https://drive.google.com/uc?export=view&id=1tClPC06UPNWFwpA2B6l9eesmvI9iOlWE",
      eliteImage: "https://drive.google.com/uc?export=view&id=1wAiJgV0m4Ej17s95KLycPRN69CVQnrfr",
      grandImage: "https://drive.google.com/uc?export=view&id=1nfYASS6r43ZanvNlCtPY_IkqcCCHy_o2",
      rareProbability: 0.95,
      eliteProbability: 0.24,
      grandProbability: 0.09
    },
    {
      name: "Mob Boss Crate",
      itemName: "Accessories Contract",
      rareImage: "https://drive.google.com/uc?export=view&id=1LgqFD5xmBOdGARhHQyq0gW7WUeksfcP2",
      eliteImage: "https://drive.google.com/uc?export=view&id=1mBJUXY_f51iVxMb_Uhsg3NfdPbdspmJd",
      grandImage: "https://drive.google.com/uc?export=view&id=1oddUrU_ceYJqVpg4wZEQmNkyfDp9c5sD",
      rareProbability: 0.84,
      eliteProbability: 0.28,
      grandProbability: 0.06
    },
    {
      name: "Legacy Crate",
      itemName: "Legacy Coin",
      rareImage: "https://drive.google.com/uc?export=view&id=1-vfqvt5Cjg0D3AaH25ZNa4Tv8-iAiI2v",
      eliteImage: "https://drive.google.com/uc?export=view&id=1R-G53R6a2MztL3JhH1C9Y4mKP1HnBmO_",
      grandImage: "https://drive.google.com/uc?export=view&id=1eCIuJX9f--2nD1XmuXIb9x7UzFAV64_2",
      rareProbability: 2.57,
      eliteProbability: 0.96,
      grandProbability: 1.39
    },
    {
      name: "Challengers Crate",
      itemName: "Challenger's Contract",
      rareImage: "https://drive.google.com/uc?export=view&id=1PLj2_981AT-Pv3pxrzRaCb27mx93MoIl",
      eliteImage: "https://drive.google.com/uc?export=view&id=18hy3MkRbJknrG1PnMUN8YVbl-pLPEJ2G",
      grandImage: "https://drive.google.com/uc?export=view&id=1dzNGHx-pJd-0uljoeP-OwXfu6eEV3D_b",
      rareProbability: 1.19,
      eliteProbability: 0.28,
      grandProbability: 0.04
    },
    {
      name: "Godfather's Crate",
      itemName: "Godfather's Contract",
      rareImage: "https://drive.google.com/uc?export=view&id=1RZmD97erHOKzNclQMyAKrs3WmX5wSPWE",
      eliteImage: "https://drive.google.com/uc?export=view&id=1AqSjGZL4drDKojRrvo9DjzcC9fFBaMgL",
      grandImage: "https://drive.google.com/uc?export=view&id=1GBU--8pNYF50Hpj8IaBnA8C4_NLQogw_",
      rareProbability: 0.26,
      eliteProbability: 0.07,
      grandProbability: 0.04
    }
  ];

  const getRarityColor = (rarity) => {
    switch(rarity) {
      case 'Grand': return 'from-yellow-400 to-orange-500';
      case 'Elite': return 'from-purple-400 to-pink-500';
      case 'Rare': return 'from-blue-400 to-cyan-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getRarityBorder = (rarity) => {
    switch(rarity) {
      case 'Grand': return 'border-yellow-400 shadow-yellow-400/50';
      case 'Elite': return 'border-purple-400 shadow-purple-400/50';
      case 'Rare': return 'border-blue-400 shadow-blue-400/50';
      default: return 'border-gray-500 shadow-gray-500/30';
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
    const stats = { Junk: 0, Rare: 0, Elite: 0, Grand: 0 };

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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Loot Crate Simulator
            </h1>
            <p className="text-gray-400 text-lg">Select a crate to begin opening</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crates.map((crate, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCrate(crate.name)}
                className="bg-gray-800 rounded-lg p-6 border-2 border-gray-700 hover:border-yellow-500 transition-all cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-bold">{crate.name}</h3>
                </div>
                <p className="text-gray-400 mb-4">{crate.itemName}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">◆ Grand</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">◆ Elite</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">◆ Rare</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">◆ Junk</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const currentCrate = crates.find(c => c.name === selectedCrate);
  const currentStats = statistics[selectedCrate] || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => setSelectedCrate(null)}
          className="mb-6 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
        >
          ← Back to Crate Selection
        </button>

        <div className="bg-gray-800 rounded-lg p-8 mb-8 border-2 border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Package className="w-12 h-12 text-yellow-400" />
              <div>
                <h2 className="text-3xl font-bold">{selectedCrate}</h2>
                <p className="text-gray-400">{currentCrate.itemName}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-900 p-4 rounded-lg text-center border-2 border-yellow-400/30">
              <p className="text-yellow-400 font-bold">Grand</p>
              <p className="text-sm text-gray-400 mt-1">Ultra Rare</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg text-center border-2 border-purple-400/30">
              <p className="text-purple-400 font-bold">Elite</p>
              <p className="text-sm text-gray-400 mt-1">Very Rare</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg text-center border-2 border-blue-400/30">
              <p className="text-blue-400 font-bold">Rare</p>
              <p className="text-sm text-gray-400 mt-1">Uncommon</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg text-center border-2 border-gray-600/30">
              <p className="text-gray-400 font-bold">Junk</p>
              <p className="text-sm text-gray-500 mt-1">Common</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <input
              type="number"
              min="1"
              max="100"
              value={openAmount}
              onChange={(e) => setOpenAmount(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
              className="px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg w-32 text-center text-xl font-bold"
            />
            <button
              onClick={openCrates}
              disabled={isOpening}
              className={`flex-1 px-6 py-3 rounded-lg font-bold text-lg transition-all ${
                isOpening 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 hover:scale-105'
              }`}
            >
              {isOpening ? 'Opening...' : `Open ${openAmount} Crate${openAmount > 1 ? 's' : ''}`}
            </button>
          </div>
        </div>

        {currentStats.total > 0 && (
          <div className="bg-gray-800 rounded-lg p-6 mb-8 border-2 border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Statistics
              </h3>
              <button
                onClick={resetStats}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors text-sm"
              >
                Reset Stats
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <p className="text-gray-400 text-sm">Total Opens</p>
                <p className="text-2xl font-bold">{currentStats.total}</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <p className="text-yellow-400 text-sm">Grand</p>
                <p className="text-2xl font-bold">{currentStats.Grand || 0}</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <p className="text-purple-400 text-sm">Elite</p>
                <p className="text-2xl font-bold">{currentStats.Elite || 0}</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <p className="text-blue-400 text-sm">Rare</p>
                <p className="text-2xl font-bold">{currentStats.Rare || 0}</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <p className="text-gray-400 text-sm">Junk</p>
                <p className="text-2xl font-bold">{currentStats.Junk || 0}</p>
              </div>
            </div>
          </div>
        )}

        {showResults && results.length > 0 && (
          <div className="bg-gray-800 rounded-lg p-6 border-2 border-gray-700">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6" />
              Results ({results.length} items)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                <div
                  key={key}
                  className={`bg-gray-900 rounded-lg p-4 border-2 ${getRarityBorder(result.rarity)} shadow-lg transition-all hover:scale-105 relative`}
                >
                  <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded text-sm font-bold">
                    x{result.count}
                  </div>
                  {result.image ? (
                    <img 
                      src={result.image} 
                      alt={result.name}
                      className="w-full h-32 object-contain mb-2 rounded"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className="w-full h-32 bg-gray-800 rounded mb-2 items-center justify-center"
                    style={{ display: result.image ? 'none' : 'flex' }}
                  >
                    <Package className="w-12 h-12 text-gray-600" />
                  </div>
                  <div className={`text-center font-bold px-2 py-1 rounded bg-gradient-to-r ${getRarityColor(result.rarity)} text-xs mb-1`}>
                    {result.rarity}
                  </div>
                  <p className="text-center text-sm truncate">{result.name}</p>
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