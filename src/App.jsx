import React, { useEffect, useRef, useState } from 'react';

const balloonColors = ['#e9a1b5', '#f4c4ce', '#dc8fa6', '#f6d5d9', '#e7aec0', '#f0b5c3', '#d98da4'];
const letterLines = [
  'Happy 21st Birthday, Sarah! 🎀',
  'I hope your 21st year is filled with beautiful memories,',
  'unexpected happiness, endless laughter,',
  'and all the love your heart can hold.',
  'You deserve every beautiful thing in this world.',
  'Never forget how special you are.',
  'With lots of love, always. 💗',
];

function Sparkle({ className = '' }) {
  return <span aria-hidden="true" className={`sparkle ${className}`}>✦</span>;
}

function Bow({ className = '' }) {
  return <svg aria-hidden="true" className={`bow ${className}`} viewBox="0 0 68 48" fill="none">
    <path d="M32 23C22 8 8 5 5 11c-4 9 10 18 27 15M36 23C46 8 60 5 63 11c4 9-10 18-27 15" fill="#e99caf" stroke="#d9849b" strokeWidth="2"/>
    <path d="m31 25-8 20 12-10 10 10-7-20" fill="#edb2c0" stroke="#d9849b" strokeWidth="1.5" strokeLinejoin="round"/>
    <ellipse cx="34" cy="23" rx="5" ry="4" fill="#f7d8de" stroke="#d9849b" strokeWidth="1.5"/>
  </svg>;
}

function GiftIllustration() {
  return <div className="gift-art" aria-label="A pink birthday present tied with a bow">
    <div className="gift-halo" />
    <div className="gift-shadow" />
    <div className="gift-lid"><span /></div>
    <div className="gift-box"><i /><b /></div>
    <Bow className="gift-bow" />
    <span className="gift-star star-one">✦</span><span className="gift-star star-two">✧</span>
    <span className="gift-heart">♡</span>
  </div>;
}

function Lily({ x, y, rotate = 0, scale = 1, pale = false }) {
  return <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
    <path d="M0 0C-8-12-19-24-9-33c4-3 9 1 11 8 2-8 7-12 11-8C23-24 8-12 0 0Z" fill={pale ? '#f5cad2' : '#e995ad'} stroke="#d97996" strokeWidth="1.2"/>
    <path d="M0-2C-3-13-5-23 2-31c1 9 2 17 0 29Z" fill="#f7dce1" opacity=".8"/>
    <path d="M0-2Q-8-19-11-25M1-4Q8-20 12-25" stroke="#fff1f1" strokeWidth="1" opacity=".8"/>
    <circle cx="0" cy="-2" r="2" fill="#bc7182"/>
    <path d="M0-3 0-13M1-3 5-11M-1-3-5-10" stroke="#e6b24e" strokeWidth="1.2" strokeLinecap="round"/>
  </g>;
}

function BouquetIllustration() {
  return <div className="bouquet-art" aria-label="Illustration of a bouquet of pink lilies wrapped in blush paper">
    <div className="bouquet-aura" />
    <svg viewBox="0 0 420 450" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f8dce0"/><stop offset="1" stopColor="#e9aebb"/></linearGradient>
        <linearGradient id="paper2" x1="0" y1="0" x2="0.9" y2="1"><stop stopColor="#fff0ed"/><stop offset="1" stopColor="#efc1c8"/></linearGradient>
        <linearGradient id="stem" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#8eaa84"/><stop offset="1" stopColor="#c2c996"/></linearGradient>
        <filter id="bouquetShadow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="13" stdDeviation="10" floodColor="#b27585" floodOpacity=".17"/></filter>
      </defs>
      <g className="bouquet-stems" stroke="url(#stem)" strokeWidth="4" fill="none" strokeLinecap="round">
        <path d="M207 208Q200 288 168 370"/><path d="M211 205Q226 290 248 371"/><path d="M208 210Q185 287 198 365"/>
        <path d="M208 235Q235 269 271 279"/><path d="M205 245Q177 273 145 294"/>
      </g>
      <g fill="#a5b88f">
        <path d="M196 291Q165 263 158 286q14 15 38 13M223 305q30-28 39-8-12 18-36 21M184 319q-31-13-34 7 17 12 35 0M236 328q29-21 34-3-12 17-34 17"/>
      </g>
      <g filter="url(#bouquetShadow)">
        <path d="M115 205 210 273 306 205 263 383 175 383Z" fill="url(#paper)" stroke="#dfa3b0" strokeWidth="1.5"/>
        <path d="m112 205 98 68-7 110-28-14Z" fill="url(#paper2)" opacity=".92"/>
        <path d="m306 205-96 68 7 110 29-14Z" fill="#f2cbd0"/>
        <path d="M115 205Q207 244 306 205L286 249Q205 278 136 247Z" fill="#fae8e8" stroke="#eab9c1" strokeWidth="1.4"/>
      </g>
      <g className="lily-sway">
        <path d="M208 232 202 154M208 226 153 165M210 220 257 145M201 239 125 205M218 238 285 193" stroke="url(#stem)" strokeWidth="3" fill="none"/>
        <Lily x={202} y={155} rotate={-2} scale={1.05}/>
        <Lily x={153} y={166} rotate={-38} scale={.94} pale/>
        <Lily x={257} y={146} rotate={34} scale={1.04}/>
        <Lily x={126} y={206} rotate={-69} scale={.86} pale/>
        <Lily x={284} y={194} rotate={66} scale={.9}/>
      </g>
      <path d="M201 280Q211 268 222 281l-5 24-9-9-10 9Z" fill="#df91a5" stroke="#ce788f" strokeWidth="1.4"/>
      <path d="M212 289q-21-19-31-5 9 14 29 10M214 289q20-18 29-4-10 14-29 9" fill="#edb3c0" stroke="#d98da1" strokeWidth="1.3"/>
      <circle cx="211" cy="289" r="4" fill="#fae7e5"/>
      <g fill="#fff7f2"><circle cx="144" cy="245" r="3"/><circle cx="267" cy="249" r="2.5"/><circle cx="180" cy="225" r="2"/><circle cx="233" cy="210" r="2.5"/></g>
      <g fill="#d8ae6f"><circle cx="136" cy="220" r="2"/><circle cx="278" cy="220" r="2"/><circle cx="242" cy="162" r="2"/></g>
    </svg>
    <Sparkle className="bouquet-glint glint-left"/><Sparkle className="bouquet-glint glint-right"/>
  </div>;
}

function Confetti({ burst = false }) {
  return <div className={`confetti-layer ${burst ? 'is-burst' : ''}`} aria-hidden="true">
    {Array.from({ length: 34 }, (_, index) => <i key={index} style={{
      '--x': `${(index * 37 + 13) % 100}%`,
      '--delay': `${(index % 9) * 0.11}s`,
      '--drift': `${((index * 17) % 180) - 90}px`,
      '--hue': `${(index * 29) % 360}`,
    }} />)}
  </div>;
}

function App() {
  const [scene, setScene] = useState(0);
  const [popped, setPopped] = useState(() => new Set());
  const poppedRef = useRef(new Set());
  const [letterOpen, setLetterOpen] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const audioRef = useRef(null);
  const poppedCount = popped.size;

  useEffect(() => () => {
    if (audioRef.current) {
      window.clearInterval(audioRef.current.timer);
      audioRef.current.context.close();
    }
  }, []);

  function toggleMusic() {
    if (musicOn) {
      window.clearInterval(audioRef.current?.timer);
      audioRef.current?.context.close();
      audioRef.current = null;
      setMusicOn(false);
      return;
    }
    const context = new window.AudioContext();
    const notes = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 783.99, 698.46];
    let note = 0;
    const playNote = () => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.value = notes[note++ % notes.length];
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.045, context.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.48);
      oscillator.connect(gain).connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.5);
    };
    playNote();
    audioRef.current = { context, timer: window.setInterval(playNote, 560) };
    setMusicOn(true);
  }

  function popBalloon(number) {
    if (poppedRef.current.has(number)) return;
    const next = new Set(poppedRef.current);
    next.add(number);
    poppedRef.current = next;
    setPopped(next);
    if (next.size === 21) {
      setCelebrating(true);
      window.setTimeout(() => setCelebrating(false), 4200);
    }
  }

  return <main className="birthday-world">
    <div className="paper-grain" aria-hidden="true" />
    <div className="ambient-shape ambient-one" aria-hidden="true" />
    <div className="ambient-shape ambient-two" aria-hidden="true" />
    <div className="floating-decor decor-one" aria-hidden="true">♡</div>
    <div className="floating-decor decor-two" aria-hidden="true">✦</div>
    <div className="floating-decor decor-three" aria-hidden="true"><Bow /></div>
    <div className="floating-decor decor-four" aria-hidden="true">✧</div>

    <header className="topbar">
      <a className="wordmark" href="#home" onClick={event => { event.preventDefault(); setScene(0); }}>
        <span className="wordmark-icon">♡</span> a little world <span className="wordmark-for">for Sarah</span>
      </a>
      <div className="topbar-right">
        <span className="date-pill"><span /> DECEMBER 03, 2026</span>
        <button className={`music-button ${musicOn ? 'playing' : ''}`} onClick={toggleMusic} aria-pressed={musicOn} aria-label={musicOn ? 'Pause background music' : 'Play background music'}>
          <span className="music-bars"><i/><i/><i/></span> {musicOn ? 'Music on' : 'Play music'}
        </button>
      </div>
    </header>

    <div className="scene-progress" aria-label={`Scene ${scene + 1} of 5`}>
      {['The surprise', 'A little something', 'Twenty-one', 'Make a wish', 'Just for you'].map((label, index) =>
        <button key={label} className={index === scene ? 'active' : index < scene ? 'complete' : ''} onClick={() => index <= scene && setScene(index)} aria-label={`Go to ${label}`} aria-current={index === scene ? 'step' : undefined}>
          <span className="progress-dot">{index < scene ? '✓' : `0${index + 1}`}</span><span className="progress-label">{label}</span>
        </button>)}
      <span className="progress-track"><i style={{ width: `${scene * 25}%` }} /></span>
    </div>

    <div className="scene-window">
      <section className={`scene scene-cover ${scene === 0 ? 'current' : ''}`} aria-hidden={scene !== 0}>
        <div className="scene-copy">
          <p className="eyebrow"><span>✦</span> A LITTLE NOTE, JUST FOR YOU <span>✦</span></p>
          <h1>A little surprise<br/>for you, <em>Sarah...</em></h1>
          <p className="scene-description">There’s a whole little world waiting inside.<br/>Made with love, and saved just for you.</p>
          <button className="primary-button" onClick={() => setScene(1)}>Open your gift <span>🎁</span><i>↗</i></button>
          <p className="under-button">go on, it’s all yours ♡</p>
        </div>
        <div className="scene-visual gift-visual"><GiftIllustration /><span className="visual-caption">a little something lovely</span></div>
      </section>

      <section className={`scene scene-bouquet ${scene === 1 ? 'current' : ''}`} aria-hidden={scene !== 1}>
        <div className="scene-copy">
          <p className="eyebrow"><span>✦</span> A BOUQUET FOR YOU <span>✦</span></p>
          <h2>For the prettiest<br/>soul, <em>Sarah ♡</em></h2>
          <p className="scene-description">A little bunch of pink lilies, picked just for you.<br/>May your year bloom into something beautiful.</p>
          <button className="primary-button" onClick={() => setScene(2)}>A wish for your 21st <span>♡</span><i>↗</i></button>
          <p className="under-button">five little lilies, endless love</p>
        </div>
        <div className="scene-visual bouquet-visual"><BouquetIllustration /><span className="visual-caption">pink lilies, with love</span></div>
        <div className="petal petal-a" aria-hidden="true">✿</div><div className="petal petal-b" aria-hidden="true">✧</div>
      </section>

      <section className={`scene scene-age ${scene === 2 ? 'current' : ''}`} aria-hidden={scene !== 2}>
        <div className="scene-copy age-copy">
          <p className="eyebrow"><span>✦</span> YOUR NEXT CHAPTER <span>✦</span></p>
          <h2>And just like that,<br/>you’re <em>twenty-one.</em></h2>
          <p className="scene-description">Here’s to all the lovely little things still to come.<br/>May every wish find its way to you.</p>
          <button className="primary-button" onClick={() => setScene(3)}>Make a wish <span>✨</span><i>↗</i></button>
          <p className="under-button">your best year yet is waiting</p>
        </div>
        <div className="age-art">
          <span className="age-orbit orbit-one"/><span className="age-orbit orbit-two"/>
          <span className="age-number">21</span><span className="age-spark age-spark-a">✦</span><span className="age-spark age-spark-b">✧</span>
          <span className="age-side-note">the prettiest<br/>chapter yet</span>
          <Bow className="age-bow"/>
        </div>
      </section>

      <section className={`scene scene-balloons ${scene === 3 ? 'current' : ''}`} aria-hidden={scene !== 3}>
        <div className="balloon-heading">
          <p className="eyebrow"><span>✦</span> TWENTY-ONE LITTLE WISHES <span>✦</span></p>
          <h2>Pop your way to <em>21!</em></h2>
          <p>Each balloon is a little wish, made just for you.</p>
          <div className="balloon-counter"><span className="counter-heart">♡</span> Balloons popped: <b>{poppedCount}</b><span>/ 21</span><div className="counter-track"><i style={{ width: `${(poppedCount / 21) * 100}%` }}/></div></div>
        </div>
        <div className={`balloon-grid ${poppedCount === 21 ? 'all-popped' : ''}`} aria-label="21 numbered birthday balloons">
          {Array.from({ length: 21 }, (_, index) => {
            const number = index + 1;
            return <button key={number} className={`balloon ${popped.has(number) ? 'popped' : ''}`} onClick={() => popBalloon(number)} disabled={popped.has(number)} aria-label={`Pop balloon ${number}`} style={{ '--balloon-color': balloonColors[index % balloonColors.length], '--float-delay': `${(index % 7) * -0.31}s`, '--balloon-rotate': `${(index % 3 - 1) * 4}deg` }}>
              <span className="balloon-shine"/><span className="balloon-number">{number}</span><span className="balloon-knot"/><span className="balloon-string"/>
              {popped.has(number) && <span className="pop-spark" aria-hidden="true">✦</span>}
            </button>;
          })}
        </div>
        {poppedCount === 21 ? <div className="letter-unlock"><p>Every wish, sent straight to the stars ✨</p><button className="primary-button" onClick={() => { setScene(4); setLetterOpen(false); }}>Open your birthday letter <span>💌</span><i>↗</i></button></div> : <p className="balloon-hint">tap each one to let a little wish go ♡</p>}
        <Confetti burst={celebrating}/>
      </section>

      <section className={`scene scene-letter ${scene === 4 ? 'current' : ''}`} aria-hidden={scene !== 4}>
        <div className="letter-intro">
          <p className="eyebrow"><span>✦</span> A LITTLE SOMETHING FROM ME <span>✦</span></p>
          <h2>Words just <em>for you.</em></h2>
          <p>One last little thing, from my heart to yours.</p>
        </div>
        <button className={`envelope ${letterOpen ? 'opened' : ''}`} onClick={() => setLetterOpen(true)} aria-label={letterOpen ? 'Birthday letter opened' : 'Open your birthday letter'} disabled={letterOpen}>
          <div className="envelope-back"/><div className="letter-paper"><span className="letter-salutation">My dearest Sarah,</span><span className="letter-stamp">♡</span></div>
          <div className="envelope-flap"/><div className="envelope-front"/><span className="envelope-seal">♡</span>
          {!letterOpen && <span className="envelope-hint">tap to open</span>}
        </button>
        {letterOpen && <article className="letter-message" aria-live="polite">
          {letterLines.map((line, index) => <p key={line} className={`letter-line line-${index + 1}`} style={{ '--line-delay': `${index * 0.72}s` }}>{line}</p>)}
        </article>}
        {letterOpen && <p className="letter-signoff">all my love, always <span>♡</span></p>}
        {!letterOpen && <p className="letter-caption">A little love, folded up just for you.</p>}
        <button className="restart-link" onClick={() => { setScene(0); poppedRef.current = new Set(); setPopped(new Set()); setLetterOpen(false); }}>start the little surprise again ↺</button>
      </section>
    </div>

    <footer className="page-footer"><span>made with <b>♥</b> for Sarah</span><span className="footer-pearl">•</span><span>her 21st chapter · 12.03.26</span></footer>
  </main>;
}

export default App;
