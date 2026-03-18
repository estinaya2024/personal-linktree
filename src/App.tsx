import React from 'react'
import './App.css'

const ProfileSection = () => (
  <section className="profile-section">
    <div className="profile-img-container">
      <img 
        src="/profile.jpg" 
        alt="Aya Malak" 
        className="profile-img"
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget.src = "https://api.dicebear.com/7.x/adventurer/svg?seed=Aya";
        }}
      />
      <div className="decorative-border"></div>
      <div className="decorative-border"></div>
      {/* Profile ornament */}
      <img src="/img6.png" className="profile-decoration-tr" alt="" />
    </div>
    <h1 className="name">
      Karou Aya Malak
      <img src="/bunny.png" className="name-bunny" alt="" />
    </h1>
    <div className="bio-card">
      {/* Bio ornaments */}
      <img src="/tomato.png" className="bio-decoration-tl" alt="" />
      <img src="/redstar.png" className="bio-decoration-br" alt="" />
      <p><strong>2CP Student at Estin</strong></p>
      <p>Frontend Developer | 19 years old</p>
    </div>
  </section>
)

interface Decoration {
  src: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotate?: number;
  size?: number;
  opacity?: number;
  zIndex?: number;
}

const WidgetDecoration = ({ dec }: { dec: Decoration }) => (
  <img
    src={dec.src}
    className="widget-decoration"
    style={{
      top: dec.top,
      bottom: dec.bottom,
      left: dec.left,
      right: dec.right,
      width: dec.size || 50,
      transform: `rotate(${dec.rotate || 0}deg)`,
      opacity: dec.opacity || 0.9,
      zIndex: dec.zIndex || 10
    }}
  />
)

const SocialWidget = ({ href, icon, label, decorations, iconDecorations = [], message, messagePosition = 'top' }: { href: string, icon: string, label: string, decorations: Decoration[], iconDecorations?: Decoration[], message?: string, messagePosition?: 'top' | 'bottom' }) => (
  <div className="widget-wrapper">
    {decorations.map((dec, i) => (
      <WidgetDecoration key={i} dec={dec} />
    ))}
    {message && (
      <div className={`widget-message pos-${messagePosition}`}>
        {message}
      </div>
    )}
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-widget"
    >
      <div className="icon-wrapper" style={{ position: 'relative' }}>
        {iconDecorations.map((dec, i) => (
          <WidgetDecoration key={i} dec={dec} />
        ))}
        <img 
          src={icon} 
          alt={label} 
          className="widget-icon" 
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = `https://api.dicebear.com/7.x/icons/svg?seed=${label}`;
          }}
        />
      </div>
      <span className="widget-label">{label}</span>
    </a>
  </div>
)

const StaticDecoration = ({ src, className, size = 60 }: { src: string, className: string, size?: number }) => (
  <img
    src={src}
    className={`static-decoration ${className}`}
    style={{ width: size, height: 'auto', opacity: 0.8 }}
    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      (e.currentTarget as HTMLImageElement).style.display = "none";
    }}
  />
)

const Background = () => (
  <div className="background-container">
    <div className="background-overlay"></div>
    <img src="/background.png" className="background-image" alt="Artistic background" />
    
  </div>
)

function App() {
  return (
    <div className="app-main">
      <Background />
      <div className="content-container">
        <ProfileSection />
        
        <div className="widgets-grid">
          <SocialWidget 
            href="https://www.instagram.com/karou._.aya?igsh=MXJwaTI5Y3IyazhxNA==" 
            icon="/insta-img.png" 
            label="Instagram" 
            decorations={[
              { src: "/pic3.png", top: "-25px", right: "-15px", rotate: 5, size: 85 }
            ]} 
          />
          <SocialWidget 
            href="https://www.facebook.com/aya.karou.2025" 
            icon="/facebook.png" 
            label="Facebook" 
            decorations={[
              { src: "/pic2.png", top: "-30px", left: "-25px", rotate: -10, size: 80 },
              { src: "/img7.png", bottom: "-15px", right: "10px", rotate: 15, size: 60, opacity: 0.7 },
              { src: "/headphones.png", top: "-15px", right: "-20px", rotate: 12, size: 65 }
            ]} 
          />
          <SocialWidget 
            href="https://discord.com/users/aya_karou" 
            icon="/discord.png" 
            label="Discord" 
            message="aya_karou"
            messagePosition="top"
            decorations={[
              { src: "/turtle.png", bottom: "-10px", right: "-10px", rotate: 10, size: 85 }
            ]} 
          />
          <SocialWidget 
            href="https://www.linkedin.com/in/aya-malak-karou-15a527398?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            icon="/linkedin.png" 
            label="LinkedIn" 
            decorations={[
              { src: "/decoration10.png", top: "-20px", right: "-25px", rotate: 10, size: 80 },
              { src: "/headphones.png", top: "-15px", left: "-10px", rotate: -15, size: 65 }
            ]} 
          />
          <SocialWidget 
            href="https://github.com/estinaya2024" 
            icon="/github.png" 
            label="GitHub" 
            decorations={[
              { src: "/decoration11.png", bottom: "-30px", right: "20px", rotate: 15, size: 75, opacity: 0.8 },
              { src: "/bee.png", top: "-30px", right: "-10px", rotate: -10, size: 60 },
              { src: "/yellowstar.png", top: "-30px", left: "-25px", rotate: -12, size: 70 }
            ]} 
          />
          <SocialWidget 
            href="mailto:a_karou@estin.dz" 
            icon="/gmail.png" 
            label="Contact Me" 
            message="a_karou@estin.dz"
            messagePosition="bottom"
            decorations={[
              { src: "/orange.png", top: "-35px", right: "-5px", rotate: -15, size: 80 }
            ]} 
            iconDecorations={[
              { src: "/greenbow.png", top: "-10px", right: "-15px", rotate: 15, size: 45 }
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default App
