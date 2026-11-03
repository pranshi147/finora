import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  GraduationCap,
  MoveUpRight,
} from "lucide-react";

export default function Homepage() {
  return (
    <div className="landing-shell">
      <style>{`
      .landing-shell{min-height:100vh;background:#f5f6f1;color:#1d3027;font-family:'DM Sans',sans-serif;overflow:hidden}.landing-nav{height:82px;max-width:1220px;margin:auto;padding:0 28px;display:flex;align-items:center;justify-content:space-between}.landing-logo{display:flex;align-items:center;gap:10px;text-decoration:none;color:#1d3027;font:800 25px Manrope,sans-serif;letter-spacing:-1.2px}.landing-logo img{width:38px;height:38px;object-fit:contain}.landing-logo em{font-style:normal;color:#83a94c}.landing-links{display:flex;align-items:center;gap:28px}.landing-links a{font-size:12px;color:#647168;text-decoration:none}.landing-links a:hover{color:#1d3027}.landing-cta{display:inline-flex;align-items:center;gap:10px;padding:12px 18px;border-radius:8px;background:#20392e;color:#eff7e7!important;font-weight:700!important}.landing-hero{max-width:1220px;margin:auto;padding:76px 28px 86px;display:grid;grid-template-columns:1.04fr .96fr;gap:52px;align-items:center}.landing-kicker{display:inline-flex;align-items:center;gap:8px;color:#6c8d42;font-size:10px;font-weight:800;letter-spacing:1.7px;text-transform:uppercase}.landing-kicker:before{content:'';width:23px;height:1px;background:#91b55b}.landing-hero h1{font:800 clamp(48px,6.1vw,78px)/1.04 Manrope,sans-serif;letter-spacing:-4px;margin:22px 0;color:#1e3329}.landing-hero h1 span{color:#789c4c}.landing-copy{font-size:16px;line-height:1.8;color:#748077;max-width:490px}.landing-actions{display:flex;align-items:center;gap:22px;margin-top:32px}.landing-primary{background:#c8e78b;color:#23372a;text-decoration:none;padding:15px 21px;border-radius:8px;font-size:12px;font-weight:800;display:inline-flex;gap:15px;align-items:center;box-shadow:0 8px 20px #a9c77a35}.landing-secondary{color:#536257;text-decoration:none;font-size:12px;font-weight:700}.landing-proof{display:flex;gap:24px;margin-top:47px;padding-top:24px;border-top:1px solid #e2e8dd}.landing-proof strong{display:block;font:800 19px Manrope;color:#263d30}.landing-proof span{font-size:10px;color:#8b968c}.hero-art{min-height:490px;position:relative;background:#1b3429;border-radius:22px;overflow:hidden;padding:30px;box-shadow:0 24px 60px #20392e25}.hero-art:before,.hero-art:after{content:'';position:absolute;border:1px solid #8aa66c35;border-radius:50%;width:420px;height:420px;right:-100px;top:-100px}.hero-art:after{width:300px;height:300px;right:-40px;top:-40px}.art-label{position:relative;z-index:1;color:#a7c18b;font-size:9px;letter-spacing:1.5px;font-weight:800}.money-card{position:absolute;z-index:2;left:40px;right:40px;top:105px;background:#f4f6ee;border-radius:15px;padding:24px;box-shadow:0 20px 45px #07170e55;transform:rotate(-2deg)}.money-card small{font-size:10px;color:#859187}.money-card h3{font:800 33px Manrope;margin:8px 0;color:#23392d;letter-spacing:-1px}.money-card .gain{font-size:10px;color:#6e9944;font-weight:700}.mini-bars{height:90px;display:flex;align-items:end;gap:9px;margin-top:22px;border-bottom:1px solid #dfe5d8}.mini-bars i{display:block;flex:1;background:#9fbd76;border-radius:5px 5px 0 0}.mini-bars i:nth-child(1){height:28%}.mini-bars i:nth-child(2){height:42%}.mini-bars i:nth-child(3){height:34%}.mini-bars i:nth-child(4){height:58%}.mini-bars i:nth-child(5){height:49%}.mini-bars i:nth-child(6){height:73%}.mini-bars i:nth-child(7){height:88%;background:#6f9346}.floating-note{position:absolute;z-index:3;right:22px;bottom:35px;background:#c8e78b;color:#20372a;border-radius:11px;padding:14px 17px;transform:rotate(3deg);box-shadow:0 12px 28px #07170e55}.floating-note b{display:block;font:800 17px Manrope}.floating-note span{font-size:9px}.art-orb{position:absolute;width:150px;height:150px;border-radius:50%;background:#8cae5c;opacity:.12;left:-55px;bottom:-45px;filter:blur(2px)}.landing-features{background:#fff;padding:80px 28px}.landing-section{max-width:1160px;margin:auto}.landing-section-head{text-align:center;max-width:580px;margin:0 auto 42px}.landing-section-head h2{font:800 34px Manrope;letter-spacing:-1.5px;margin:13px 0;color:#21372b}.landing-section-head p{font-size:13px;line-height:1.7;color:#7e8980}.feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.feature-card{padding:25px;border:1px solid #e8ece4;border-radius:13px;background:#fbfcf9}.feature-icon{width:42px;height:42px;display:grid;place-items:center;background:#edf4e5;color:#6f9147;border-radius:11px}.feature-card h3{font:700 15px Manrope;margin:20px 0 9px}.feature-card p{font-size:11px;line-height:1.8;color:#7d887e;margin:0}.landing-bottom{max-width:1160px;margin:70px auto;padding:0 28px}.bottom-panel{background:#1b3429;border-radius:18px;padding:43px 48px;display:flex;align-items:center;justify-content:space-between;gap:20px;color:white}.bottom-panel h2{font:800 29px Manrope;letter-spacing:-1px;margin:10px 0}.bottom-panel p{font-size:12px;color:#a8b8ac}.landing-footer{border-top:1px solid #e5e9e1;padding:25px;text-align:center;color:#8b968d;font-size:10px}@media(max-width:800px){.landing-hero{grid-template-columns:1fr;padding-top:48px}.hero-art{min-height:420px}.landing-hero h1{letter-spacing:-2px}.feature-grid{grid-template-columns:1fr}.landing-links a:not(.landing-cta){display:none}.bottom-panel{display:block;padding:30px}.bottom-panel .landing-primary{margin-top:18px}}`}</style>
      <header className="landing-nav">
        <Link to="/" className="landing-logo">
          <img src="/finoraLogo.png" alt="" />
          finora<em>.</em>
        </Link>
        <nav className="landing-links">
          <a href="#why-finora">Why finora</a>
          <a href="#how-it-works">How it works</a>
          <Link to="/login">Log in</Link>
          <Link to="/signup" className="landing-cta">
            Get started <ArrowUpRight size={15} />
          </Link>
        </nav>
      </header>
      <section className="landing-hero">
        <div>
          <div className="landing-kicker">A calmer way to manage money</div>
          <h1>
            Your money.
            <br />
            Your moves.
            <br />
            <span>Your future.</span>
          </h1>
          <p className="landing-copy">
            Build confidence with your finances. Understand your spending, learn
            the language of investing, and make your next money move with
            clarity.
          </p>
          <div className="landing-actions">
            <Link to="/signup" className="landing-primary">
              Start your journey <MoveUpRight size={16} />
            </Link>
            <Link to="/login" className="landing-secondary">
              I already have an account ↗
            </Link>
          </div>
          <div className="landing-proof">
            <div>
              <strong>01</strong>
              <span>Know where it goes</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Learn as you grow</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Make it count</span>
            </div>
          </div>
        </div>
        <div className="hero-art">
          <div className="art-label">YOUR FINANCIAL SNAPSHOT · PREVIEW</div>
          <div className="money-card">
            <small>Portfolio overview</small>
            <h3>₹ 48,650</h3>
            <span className="gain">↗ 8.4% this month</span>
            <div className="mini-bars">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
                fontSize: 9,
                color: "#8a958b",
              }}
            >
              <span>WEEK 01</span>
              <span>WEEK 07</span>
            </div>
          </div>
          <div className="floating-note">
            <b>Small steps.</b>
            <span>Stronger money habits.</span>
          </div>
          <div className="art-orb" />
        </div>
      </section>
      <section className="landing-features" id="why-finora">
        <div className="landing-section">
          <div className="landing-section-head">
            <div className="landing-kicker">Everything in one place</div>
            <h2>Less money stress. More money sense.</h2>
            <p>
              Finora brings the tools and knowledge together, so you can move
              from wondering about money to making informed decisions.
            </p>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">
                <TrendingUp size={20} />
              </div>
              <h3>See the bigger picture</h3>
              <p>
                Track spending patterns and explore clear insights into where
                your money is going.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">
                <Sparkles size={20} />
              </div>
              <h3>A coach in your corner</h3>
              <p>
                Ask everyday money questions and get approachable guidance
                through your journey.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">
                <GraduationCap size={20} />
              </div>
              <h3>Learn by doing</h3>
              <p>
                Build financial confidence with bite-sized lessons and a
                practice trading arena.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="landing-bottom" id="how-it-works">
        <div className="bottom-panel">
          <div>
            <div className="landing-kicker">Make your next move</div>
            <h2>
              Start where you are.
              <br />
              Grow from there.
            </h2>
            <p>
              No perfect starting point needed. Just curiosity and a first step.
            </p>
          </div>
          <Link to="/signup" className="landing-primary">
            Create your free account <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <footer className="landing-footer">
        © {new Date().getFullYear()} finora · Your money, in motion.
      </footer>
    </div>
  );
}
